
import './App.css';

function App() {
  return (
    <div className="App">

      <button onClick={()=>{
        let engMarks = 85;
        while(engMarks<1000){
          console.log(engMarks);
          engMarks++;
          if(engMarks==600){
            break;
          }
        }
      }}>While</button>

      <button onClick={()=>{
        let  m = 1;
        do{
          console.log(`${m}. Jai Shri Krishna`);
          m++;
          if (m==109){
            break;
          }
        }while(m<=500)
      }}>Do While</button>
      <button onClick={()=>{
        for (let i = 1; i <=1000; i++) {
          for(let j=1; j<=100;j++){
            if(i>=123&&i<=123){
              continue;
            }
            if(i>=456&&i<=456){
              continue;
            }
            if(i>=694&&i<=697){
              continue;
            }
            if(i>=789&&i<=789){
              continue;
            }
            if(j>=44&&j<=46){
              continue;
            }
            if(j>=53&&j<=53){
              continue;
            }
            if(j>=67&&j<=67){
              continue;
            }
            if(j>=81&&j<=81){
              continue;
            }

            console.log(`${i}*${j}=${i*j}`);
          }
          
        }
      }}>For</button>
    </div>
  );
}

export default App;
