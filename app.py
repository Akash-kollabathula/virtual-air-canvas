# All the imports go here;
from gtts import gTTS
import cv2
import numpy as np
import mediapipe as mp
from collections import deque
import time
import sounddevice as sd
import soundfile as sf
import random

def gen():
    language = 'en'
    l1 = 0
    # Giving different arrays to handle colour points of different colour
    bpoints = [deque(maxlen=1024)]
    gpoints = [deque(maxlen=1024)]
    rpoints = [deque(maxlen=1024)]
    ypoints = [deque(maxlen=1024)]

    # These indexes will be used to mark the points in particular arrays of specific colour
    blue_index = 0
    green_index = 0
    red_index = 0
    yellow_index = 0

    #The kernel to be used for dilation purpose 
    kernel = np.ones((5,5),np.uint8)

    colors = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (0, 255, 255)]
    colorIndex = 0

    # Here is code for Canvas setup
    paintWindow = np.zeros((471,636,3)) + 255

    # cv2.namedWindow('Paint', cv2.WINDOW_NORMAL)
    # cv2.resizeWindow("Paint", 750, 750)

    # initialize mediapipe
    mpHands = mp.solutions.hands
    hands = mpHands.Hands(max_num_hands=1, min_detection_confidence=0.7)
    mpDraw = mp.solutions.drawing_utils

    # Initialize the webcam
    cap = cv2.VideoCapture(0)
    ret = True
    while ret:
        # Read each frame from the webcam
        ret, frame = cap.read()
        if not ret:
             break 
        else:
            x, y, c = frame.shape

            # Flip the frame vertically
            frame = cv2.flip(frame, 1)
            #hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
            framergb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

            frame = cv2.rectangle(frame, (10,1), (80,65), (238,130,238), 2)
            frame = cv2.rectangle(frame, (90,1), (170,65), (0,0,0), 2)
            frame = cv2.rectangle(frame, (180,1), (260,65), (255,0,0), 2)
            frame = cv2.rectangle(frame, (270,1), (350,65), (0,255,0), 2)
            frame = cv2.rectangle(frame, (360,1), (440,65), (0,0,255), 2)
            frame = cv2.rectangle(frame, (450,1), (540,65), (0,255,255), 2)
            frame = cv2.rectangle(frame, (550,1), (630,65), (0,125,255), 2)

            
            
            cv2.putText(frame, "SAVE", (29, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,0, 255,.9), 2, cv2.LINE_AA)
            cv2.putText(frame, "CLEAR", (90, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5,(0,0, 0,.9), 2, cv2.LINE_AA)
            cv2.putText(frame, "BLUE", (189, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0, 0,.9), 2, cv2.LINE_AA)
            cv2.putText(frame, "GREEN", (279, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0, 0,.9), 2, cv2.LINE_AA)
            cv2.putText(frame, "RED", (369, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0, 0,.9), 2, cv2.LINE_AA)
            cv2.putText(frame, "YELLOW", (459, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,0, 0,.9), 2, cv2.LINE_AA)
            cv2.putText(frame, "BREAK", (559, 33), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,125, 255,.9), 2, cv2.LINE_AA)


            #frame = cv2.cvtColor(hsv, cv2.COLOR_HSV2BGR)

            # Get hand landmark prediction
            result = hands.process(framergb)

            # post process the result
            if result.multi_hand_landmarks:
                landmarks = []
                for handslms in result.multi_hand_landmarks:
                    for lm in handslms.landmark:
                        # # print(id, lm)
                        # print(lm.x)
                        # print(lm.y)
                        lmx = int(lm.x * 640)
                        lmy = int(lm.y * 480)

                        landmarks.append([lmx, lmy])


                    # Drawing landmarks on frames
                    mpDraw.draw_landmarks(frame, handslms, mpHands.HAND_CONNECTIONS)
                fore_finger = (landmarks[8][0],landmarks[8][1])
                center = fore_finger
                thumb = (landmarks[4][0],landmarks[4][1])
                cv2.circle(frame, center, 3, (0,255,0),-1)
                print(center[1]-thumb[1])
                if (thumb[1]-center[1]<30):
                    bpoints.append(deque(maxlen=512))
                    blue_index += 1
                    gpoints.append(deque(maxlen=512))
                    green_index += 1
                    rpoints.append(deque(maxlen=512))
                    red_index += 1
                    ypoints.append(deque(maxlen=512))
                    yellow_index += 1

                elif center[1] <= 65:
                    if 10 <= center[0] <= 80:
                        output6 = gTTS(text='Save', lang =language, slow=False)
                        output6.save("output6.mp3")
                        # os.system("start output6.mp3")

                        data, fs = sf.read("output6.mp3")
                        sd.play(data, fs)
                        sd.wait()
                        l1=random.randint(1000,9999)
                        # cv2.imwrite('./frontend/src/assests/photos/img'+str(l1)+'.jpg',paintWindow)
                        cv2.imwrite('./frontend/src/assests/photos/img'+str(l1)+'.jpg',paintWindow)
                        time.sleep(2)
                        l1 = l1 + 1
                    elif 90 <= center[0] <= 170: # Clear Button
                        bpoints = [deque(maxlen=512)]
                        gpoints = [deque(maxlen=512)]
                        rpoints = [deque(maxlen=512)]
                        ypoints = [deque(maxlen=512)]

                        blue_index = 0
                        green_index = 0
                        red_index = 0
                        yellow_index = 0

                        paintWindow[67:,:,:] = 255
                        mytext1="clear"
                        output1 = gTTS(text=mytext1, lang =language, slow=False)
                        output1.save("output1.mp3")
                        data, fs = sf.read("output1.mp3")
                        sd.play(data, fs)
                        sd.wait()
                    elif 180 <= center[0] <= 260:
                            colorIndex = 0 # Blue
                            mytext2="Blue"
                            output2 = gTTS(text=mytext2, lang = language, slow=False)
                            output2.save("output2.mp3")
                            data, fs = sf.read("output2.mp3")
                            sd.play(data, fs)
                            sd.wait()
                    elif 270 <= center[0] <= 350:
                            colorIndex = 1 # Green
                            mytext3="Green"
                            output3 = gTTS(text=mytext3, lang = language, slow=False)
                            output3.save("output3.mp3")
                            data, fs = sf.read("output3.mp3")
                            sd.play(data, fs)
                            sd.wait()
                    elif 360 <= center[0] <= 440:
                            colorIndex = 2 # Red
                            mytext4="red"
                            output4 = gTTS(text=mytext4, lang = language, slow=False)
                            output4.save("output4.mp3")
                            data, fs = sf.read("output4.mp3")
                            sd.play(data, fs)
                            sd.wait()
                    elif 450 <= center[0] <= 540:
                            colorIndex = 3 # Yellow
                            mytext5="yellow"
                            output5= gTTS(text=mytext5, lang = language, slow=False)
                            output5.save("output5.mp3")
                            data, fs = sf.read("output5.mp3")
                            sd.play(data, fs)
                            sd.wait()
                    elif 550<=center[0]<=630:
                         colorIndex=4 
                         mytext6="break"
                         output6= gTTS(text=mytext6, lang = language, slow=False)
                         output6.save("output6.mp3")
                         data, fs = sf.read("output6.mp3")
                         sd.play(data, fs)
                         sd.wait()
                         break
                else :
                    if colorIndex == 0:
                        bpoints[blue_index].appendleft(center)
                    elif colorIndex == 1:
                        gpoints[green_index].appendleft(center)
                    elif colorIndex == 2:
                        rpoints[red_index].appendleft(center)
                    elif colorIndex == 3:
                        ypoints[yellow_index].appendleft(center)
                    
            # Append the next deques when nothing is detected to avois messing up
            else:
                bpoints.append(deque(maxlen=512))
                blue_index += 1
                gpoints.append(deque(maxlen=512))
                green_index += 1
                rpoints.append(deque(maxlen=512))
                red_index += 1
                ypoints.append(deque(maxlen=512))
                yellow_index += 1

            # Draw lines of all the colors on the canvas and frame
            points = [bpoints, gpoints, rpoints, ypoints]
        
            for i in range(len(points)):
                for j in range(len(points[i])):
                    for k in range(1, len(points[i][j])):
                        if points[i][j][k - 1] is None or points[i][j][k] is None:
                            continue
                        cv2.line(frame, points[i][j][k - 1], points[i][j][k], colors[i], 2)
                        cv2.line(paintWindow, points[i][j][k - 1], points[i][j][k], colors[i], 2)

            # cv2.namedWindow('OUTPUT', cv2.WINDOW_NORMAL)
            # cv2.resizeWindow("OUTPUT", 750, 750)

            # cv2.imshow("OUTPUT", frame) 
            # cv2.imshow("Paint", paintWindow)
            _,buffer=cv2.imencode('.jpg',frame)
            frame=buffer.tobytes()
            #cv2.imwrite('./akas.jpg',paintWindow)
            cv2.imwrite('./frontend/src/assests/img0.jpg',paintWindow)
            # yield(b'--paint\r\n'b'continue')
            yield(b'--frame\r\n 'b'Content-Type:image/jpeg\r\n\r\n'+frame+b'\r\n')
            # frame=bytes('static/images/img0.jpg','utf-8')

            # yield(b'--paint\r\n'b'Content-Type:image/jpeg\r\n\r\n'+frame+b'\r\n')
            

            # yield 'frame',b'--frame\r\n'b'Content-Type:image/jpeg\r\n\r\n'+frame+b'\r\n'

            # _,bufferpaint=cv2.imencode('.jpg',paintWindow)
            # paintWindow=bufferpaint.tobytes()
            # print(paintWindow)
            # bufferpaint=paintWindow.tobytes()
            # yield(b'--paintwindow\r\n'b'Content-Type:image/jpeg\r\n\r\n'+bufferpaint+b'\r\n')
            


    cap.release()
    cv2.destroyAllWindows()
