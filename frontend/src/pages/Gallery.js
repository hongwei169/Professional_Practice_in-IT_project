import React ,{useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Card.css';
import ReactPlayer from 'react-player';


function Gallery() { 
  return (
    
<CardGroup>
      <div className="row">
        <div className="col-md-4">
          <Card  >
          <ReactPlayer url="https://www.youtube.com/watch?v=jZhKPgjb0yg&list=RDCMUC7t6QJ4u8qF8pI-vibX-BUQ&start_radio=1&rv=jZhKPgjb0yg&t=0" height= "300px" width = "400px" />
            <Card.Body>
            <Card.Title>The Best Abs Workout</Card.Title>
            <Card.Text>
              <ol>
              <li>Abs improve athletic performance</li>
              <li>Strong abs ease activities.</li>
              <li>Abs Reduces injury risk</li>
              <li>Strong core can improve balance and stability</li>
            </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=K-mWhSTmCXo" height= "300px" width = "400px" />
            <Card.Body>
            <Card.Title>Plank Workout </Card.Title>
              <Card.Text> 
              <ol>
              <li>Builds core strength</li>
              <li>Increases endurance and stamina</li>
              <li>Enhances balance and stability</li>
              <li>Targets multiple muscle groups simultaneously</li>
              </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=AWLUQdO0rf8" height= "300px" width = "400px" />
          <Card.Body>
          <Card.Title>Upper Body Dumb Bell Workout</Card.Title>
              <Card.Text>
              <ol>
              <li>Builds upper body strength</li>
              <li>Increases bone density</li>
              <li>Improves overall physical performance</li>
              <li>Boosts metabolism and aids in weight loss</li>
              </ol>
             </Card.Text>
           
          </Card.Body>
           
          </Card>
        </div>     
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=G_9dunuO1lo" height= "300px" width = "400px" />
            <Card.Body>
              <Card.Title>Hamstrings Quadriceps Calves</Card.Title>
              <Card.Text>
                <ol>
                  <li>Builds leg strength</li>
                  <li>Helps prevent injury</li>
                  <li>Enhances flexibility and range of motion</li>
                  <li>Improves cardiovascular health</li>
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
        <div className="col-md-4">
          <Card>
            <ReactPlayer url="https://www.youtube.com/watch?v=LEPcdaNyWQI" height= "300px" width = "400px"  />
            <Card.Body>
              <Card.Title>Standing Exercises </Card.Title>
              <Card.Text>
              <ol>
                  <li>Improves cardiovascular health</li>
                  <li>Improves posture and alignmen</li>
                  <li>Increases calorie burn and aids in weight loss</li>
                  <li>Boosts energy levels and improves mood</li>
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=YFAuNBwvugY" height= "300px" width = "400px"  />
        <Card.Body>
          <Card.Title>Toned Legs</Card.Title>
          <Card.Text>
          <ol>
             <li>Tones and defines leg muscles</li>
             <li>Boosts self-confidence and body imag</li>
             <li>Increases metabolism for greater calorie burn</li>
             <li>Shapes legs for a more aesthetic appearance</li>
          </ol>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>    
  </div>
  <div className="row">
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=spyYTsb_qJM" height= "300px" width = "400px"  />
            <Card.Body>
              <Card.Title>Kegel Exercise To Strengthen Pelvic Muscles</Card.Title>
              <Card.Text>
          <ol>
            <li>Increases pelvic floor strength and endurance</li>
            <li>Aids in postpartum recovery</li>
            <li>Reduces pelvic pain and discomfort</li>
            <li>Helps prevent urinary incontinence</li>
         </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=DvrSQdoVxD8" height= "300px" width = "400px"  />
            <Card.Body>
              <Card.Title>Jogging Workout </Card.Title>
              <Card.Text>
          <ol>
            <li>Boosts energy levels and productivity</li>
            <li>Enhances physical performance and athleticism</li>
            <li>Improves cardiovascular health </li>
            <li>Provides benefits to full body</li>
         </ol>    
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=cgr9XwukmX8" height= "300px" width = "400px" /> 
        <Card.Body>
          <Card.Title>Chest Exercises</Card.Title>
          <Card.Text>
          <ol>
            <li>Helps improve breathing and lung capacity</li>
            <li>Improves functional movement patterns</li>
            <li>Increases upper body power and explosiveness</li>
            <li>Tones in the upper body</li>
         </ol>    
          </Card.Text>
        </Card.Body>
      </Card>
    </div>  
  </div> 
  <div className="row">
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=QuGHNMaM-6I" height= "300px" width = "400px" /> 
            <Card.Body>
              <Card.Title>The Best Stretch Exercises</Card.Title>
              <Card.Text>
         <ol>
            <li>Builds chest strength and muscle mass</li>
            <li>Enhances upper body strength and power</li>
            <li>Boosts metabolism and aids in weight loss</li>
            <li>Improves upper body posture and alignment</li>
         </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=OIXJ6KaYeU4" height= "300px" width = "400px"  /> 
            <Card.Body>
              <Card.Title>Arm Transformation </Card.Title>
              <Card.Text>
         <ol>
            <li>Provides functional benefits for daily activities</li>
            <li>Boosts self-confidence and body image</li>
            <li>Enhances upper body posture and alignment</li>
            <li>Reduces the risk of osteoporosis</li>
         </ol>   
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=j7sl7kjo5cU" height= "300px" width = "400px" /> 
        <Card.Body>
          <Card.Title>Toned Body</Card.Title>
          <Card.Text>
          <ol>
            <li>Reduces the risk of chronic disease and illness</li>
            <li>Enhances mental and emotional well-being</li>
            <li>Increases metabolism and aids in weight loss</li>
            <li>Enhances physical appearance</li>
         </ol>   
          </Card.Text>
        </Card.Body>
      </Card>
    </div>   
  </div> 
  <div className="row">
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=e2AAeteBWL8" height= "300px" width = "400px" /> 
            <Card.Body>
              <Card.Title>Push-Ups Increase Strength</Card.Title>
              <Card.Text>
         <ol>
            <li>Improves overall physical function and mobility</li>
            <li>Improves core stability and posture</li>
            <li>Builds upper body strength and muscle mass</li>
            <li>Targets multiple muscle groups simultaneously</li>
         </ol>   
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=ThX3Mms9IdE" height= "300px" width = "400px" />
            <Card.Body>
              <Card.Title>Flat Stomarch</Card.Title>
              <Card.Text>
          <ol>
            <li>Reduce lower back pain and discomfort</li>
            <li>Improves digestive function and reduces bloating</li>
            <li>Improves balance and coordination</li>
            <li>Improves core strength and stability</li>
         </ol>    
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <ReactPlayer url="https://www.youtube.com/watch?v=k3dOeri_lxI" height= "300px" width = "400px"  /> 
        <Card.Body>
          <Card.Title>The Best Mobility Exercises</Card.Title>
          <Card.Text>
          <ol>
            <li>Helps relief from muscle soreness and stiffness</li>
            <li>Increases body awareness and mindfulness</li>
            <li>Enhancesrange of motion and flexibility</li>
            <li>Improves mobility </li>
         </ol>   
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
</CardGroup>
    

  );
}


export default Gallery;