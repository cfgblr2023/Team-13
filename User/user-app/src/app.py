from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np

app = Flask(_name_)
model = load_model(r"D:\DOWNLOADS\model.h5")  # Replace with the actual path to your trained model

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def predict():
    image_file = request.files['image']
    image_path = image_file.filename
    image_file.save(image_path)

    image = load_img(image_path, target_size=(224, 224))
    image = img_to_array(image)
    image = image.reshape(1, 224, 224, 3)
    image = image.astype('float32')
    image /= 255.0
    categories = categories = ['Footpath Quality', 'Waste', 'Obstruction', 'Unsafe Zone','Encroachment']
    prediction = model.predict(image)
    class_index = np.argmax(prediction)
    class_label =   categories[class_index]

    return render_template('index.html', prediction=class_label)

if _name_ == '_main_':
    app.run(debug=True)

# app.run(debug=True)