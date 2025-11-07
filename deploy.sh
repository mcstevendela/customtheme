#!/bin/bash

# Multi-Server WordPress Theme Deployment Script
# Supports deployment to multiple servers with automated Git operations and cleanup

# Configuration
SERVERS=(
  "uyv5afd@173.208.5.118:/home/uyv5afd/public_html/wp-content/themes/3pdelivery615"
  # Add more servers as needed
)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Deployment script completed!${NC}"

for SERVER in "${SERVERS[@]}"; do
    USER_HOST=$(echo $SERVER | cut -d: -f1)
    THEME_PATH=$(echo $SERVER | cut -d: -f2-)
    echo -e "${YELLOW}Starting deployment to $USER_HOST...${NC}"

    ssh $USER_HOST << EOF
        cd $THEME_PATH
        echo -e "${YELLOW}Current directory: \$(pwd)${NC}"
        git status
        echo -e "${YELLOW}Resetting git to HEAD~2...${NC}"
        git reset --hard HEAD~2
        echo -e "${YELLOW}Pulling latest changes...${NC}"
        git pull origin main
        echo -e "${YELLOW}Removing development files from production...${NC}"
        rm -f gulpfile.js package.json package-lock.json tailwind.config.js config.js README.md deploy_copy.sh style_copy.css
        rm -rf scss/ node_modules/
        echo -e "${GREEN}Deployment completed!${NC}"
        echo -e "${YELLOW}Final git status:${NC}"
        git status
        echo -e "${YELLOW}Current git commit:${NC}"
        git rev-parse HEAD
EOF

    echo -e "${GREEN}Deployment to $USER_HOST completed!${NC}"
done

echo -e "${GREEN}All deployments completed!${NC}"
