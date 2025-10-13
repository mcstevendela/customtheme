<?php
// Simple WordPress theme test
// Navigate to: http://localhost:10073/wp-content/themes/3pdelivery615/test-timber.php

// Include WordPress configuration
require_once '../../../wp-config.php';

echo "<h1>Timber Test</h1>";

// Test 1: Check if Timber classes exist
echo "<h2>Class Availability:</h2>";
echo "Timber\\Timber class exists: " . (class_exists('Timber\\Timber') ? 'YES' : 'NO') . "<br>";
echo "Timber\\Site class exists: " . (class_exists('Timber\\Site') ? 'YES' : 'NO') . "<br>";
echo "Timber\\Post class exists: " . (class_exists('Timber\\Post') ? 'YES' : 'NO') . "<br>";

// Test 2: Try to get context
if (class_exists('Timber\\Timber')) {
    try {
        echo "<h2>Timber Context Test:</h2>";
        $context = Timber::context();
        echo "Timber context loaded successfully!<br>";
        echo "Context keys: " . implode(', ', array_keys($context)) . "<br>";
    } catch (Exception $e) {
        echo "Error loading Timber context: " . $e->getMessage() . "<br>";
    }
} else {
    echo "<h2>Timber Not Available</h2>";
}

echo "<h2>Theme Directory:</h2>";
echo "Theme directory: " . get_stylesheet_directory() . "<br>";
echo "Template directory: " . get_template_directory() . "<br>";
?>