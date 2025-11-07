#!/bin/bash

# Multi-Server WordPress Theme Deployment Script
# Supports deployment to multiple servers with automated Git operations and cleanup

# Color codes for console output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SERVERS=(
  "uyv5afd@173.208.5.118:/home/uyv5afd/public_html/wp-content/themes/3pdelivery615"
  # Add more servers as needed
)

# Production files to remove after deployment
CLEANUP_FILES=(
  "gulpfile.js"
  "package.json" 
  "package-lock.json"
  "tailwind.config.js"
  "config.js"
  "README.md"
  "deploy.sh"
  "scss/"
  "node_modules/"
  "composer.lock"
)

echo -e "${BLUE}==========================================${NC}"
echo -e "${BLUE}  Multi-Server Theme Deployment Script${NC}"
echo -e "${BLUE}==========================================${NC}"

# Function to print status messages
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Build production files locally
print_status "Building production files..."
npm run prod

if [ $? -ne 0 ]; then
    print_error "Production build failed. Aborting deployment."
    exit 1
fi

print_status "Production build completed successfully."

# Deploy to each server
for SERVER in "${SERVERS[@]}"; do
    print_status "Deploying to server: $SERVER"
    
    # Extract user@host and path
    USER_HOST=$(echo $SERVER | cut -d':' -f1)
    REMOTE_PATH=$(echo $SERVER | cut -d':' -f2)
    
    print_status "Connecting to $USER_HOST..."
    
    # Execute remote Git operations
    ssh $USER_HOST << EOF
        cd $REMOTE_PATH
        echo "Current directory: \$(pwd)"
        
        # Reset to 2 commits back and then pull latest
        echo "Resetting Git repository..."
        git reset --hard HEAD~2
        
        echo "Pulling latest changes..."
        git pull origin main
        
        if [ \$? -eq 0 ]; then
            echo "Git operations completed successfully"
        else
            echo "Git operations failed"
            exit 1
        fi
EOF

    if [ $? -eq 0 ]; then
        print_status "Git operations completed on $USER_HOST"
        
        # Clean up development files
        print_status "Cleaning up development files on $USER_HOST..."
        
        for FILE in "${CLEANUP_FILES[@]}"; do
            ssh $USER_HOST "cd $REMOTE_PATH && rm -rf $FILE" 2>/dev/null
        done
        
        print_status "Deployment to $USER_HOST completed successfully"
    else
        print_error "Deployment to $USER_HOST failed"
    fi
    
    echo ""
done

print_status "All deployments completed!"

# Optional: Clean up local build directory
read -p "Do you want to clean up the local build directory? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -rf build/
    print_status "Local build directory cleaned up."
fi

echo -e "${GREEN}==========================================${NC}"
echo -e "${GREEN}  Deployment completed successfully!${NC}"
echo -e "${GREEN}==========================================${NC}"