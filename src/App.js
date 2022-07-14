import './App.css';

function App() {
  return (
    <div className = {styles.main}>
      <img src="./images/950109-0003.png"></img>
      <div className = {styles.guide}>
        Guide
      </div>
      <div className = {styles.guideline}>
        <ul>
          <li>물건인식 페이지는 물건을 인식하고 확인버튼을 눌려 해당 물건의 탄소배출량을 확인할 수 있습니다!</li>
          <li>현재탄소량 페이지는 현재 냉장고에 있는 음식의 탄소배출량을 보여줍니다!</li>
          <li>MY 페이지는 현재까지 소비한 탄소배출량, 계정정보, 프로필등을 보여줍니다!</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
