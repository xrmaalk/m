import cv2


def remove_background(image_path):
    # Read the image
    image = cv2.imread(image_path)

    # Create a mask of the image by converting it to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply a threshold to create a binary image
    _, binary = cv2.threshold(
        gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Find contours in the binary image
    contours, _ = cv2.findContours(
        binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Create a mask for the background
    mask = cv2.drawContours(binary, contours, -1,
                            (0, 0, 0), thickness=cv2.FILLED)

    # Apply the mask to the original image
    result = cv2.bitwise_and(image, image, mask=mask)

    # Display the result
    cv2.imshow("Original", image)
    cv2.imshow("Background Removed", result)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


# Specify the path to your image
image_path = "path/to/your/image.jpg"

# Call the function to remove the background
remove_background(image_path)
