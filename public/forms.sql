    -- Create a table for storing form submissions
CREATE TABLE FormSubmissions (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO FormSubmissions (name, email, message)
VALUES
    ('John Doe', 'john@example.com', 'This is a test message.'),
    ('Jane Smith', 'jane@example.com', 'Another test message.');

-- Select data from the FormSubmissions table
SELECT id, name, email, message, submission_date
FROM FormSubmissions;

-- Update data in the FormSubmissions table
UPDATE FormSubmissions SET message = 'Updated message' WHERE id = 1;

-- Delete a record from the FormSubmissions table
DELETE FROM FormSubmissions WHERE id = 2;

-- Drop the FormSubmissions table (be cautious with this)
DROP TABLE FormSubmissions;
