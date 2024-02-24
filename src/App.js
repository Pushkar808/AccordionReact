import { useState } from 'react';
import './App.css';
import Accordion from './component/accordion';

function App() {
  const [activeItem, setActiveItem] = useState(null);
  const accordionData = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy",
      content: `Lorem Ipsum is simply dummy 
      text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since 
      the 1500s, when an unknown printer took a galley of type and scrambled
       it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially
         unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
       publishing software like Aldus PageMaker including versions of Lorem Ipsum`

    },
    {
      id: 2,
      title: "There are many variations of passages of Lorem Ipsum",
      content: `There are many variations of passages of Lorem Ipsum available, 
      but the majority have suffered alteration in some form, by injected humour, 
      or randomised words which don't look even slightly believable. 
      If you are going to use a passage of Lorem Ipsum, you need to be sure there 
      isn't anything embarrassing hidden in the middle of text. 
      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
       It uses a dictionary of over 200 Latin words, combined with a handful of `
    }
  ]
  return (
    <div className="container">
      {
        accordionData.map((accor, index) => {
          return <Accordion
            key={index}
            id={accor?.id}
            title={accor?.title}
            content={accor?.content}
            setActiveItem={setActiveItem}
            isOpen={accor.id == activeItem}
          />
        })
      }
    </div>
  );
}

export default App;
