from flask import Flask, request
import rembg
from PIL import Image

app = Flask(__name__)


@app.route('./remove-bg', methods=['POST'])
def remove_background(input_path, output_path):
    with open(input_path, "rb") as f:
        img = f.read()
    output = rembg.remove(img)
    with open(output_path, "wb") as f:
        f.write(output)


if __name__ == "__main__":
    app.run(debug=True)
    input_path = input(
        "Enter file path, e.g., 'image/Maitreya-Remove-BG.png': ")
    output_path = "./RENAME-BG-Removed.png"
    remove_background(input_path, output_path)
    print(output_path, "Background Removal Success.")
