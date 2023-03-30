from flask import Flask,render_template,request,Response
from app import gen
import os
app=Flask(__name__)
"""
@app.route('/',methods=['POST','GET'])
def index():
   
    return render_template('index.html')

@app.route("/files")
def file_page():
    files=os.listdir('static/photos')
    files=['photos/'+file for file in files]
    return Response(files=files)
"""
@app.route("/cam")
def camera():
    
    
    return render_template('camera.html')




@app.route('/video')
def video():
    
        # print(value[0])
    return Response(gen(),mimetype='multipart/x-mixed-replace; boundary="--frame"')

    

if __name__=='__main__':
    app.run(debug=True)