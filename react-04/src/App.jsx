import Data from "./components/Data";
import Items from "./data.json";

function App() {
  // step 2 for loop//
  // let item = [];
  // for (let x = 0; x < Items.length; x++) {
  //   item.push(
  //     <Data
  //       titleText={Items[x].title}
  //       titleDesc={Items[x].subject}
  //       titleLink={Items[x].link}
  //     />
  //   );
  // }

  return (
    <>
      <h1>
        Mapping data & adding componant with JSON <pre>data.json</pre>
      </h1>
      {/* {item} */}

      {/*step 1// <Data titleText={Items[0].title} titleDesc={Items[0].subject} titleLink={Items[0].link}/>
     <Data titleText={Items[1].title} titleDesc={Items[1].subject} titleLink={Items[1].link}/>
     <Data titleText={Items[2].title} titleDesc={Items[2].subject} titleLink={Items[2].link}/> */}

      {/* //step 3 use MAp// */}
      {Items.map((i, index) => (
        <Data
          key={index}
          titleText={i.title}
          titleDesc={i.subject}
          titleLink={i.link}
        />
      ))}
    </>
  );
}

export default App;
