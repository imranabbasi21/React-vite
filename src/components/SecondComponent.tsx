import React from 'react';

const SecondComponent = (props) =>{
    // const [count, setCount] = useState(0)
  
    const showPopup = () => {
      alert("Button submitted");
    }
  
    const profile = {
      name: 'Imran Abbasi',
      job: 'React Web Developer',
      bio: 'A passionate developer who loves building React web apps.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=6cca0de5884e51152f929e020731af78aa4c69ba-5315583-images-thumbs&n=13',
      contact: 'imranabbasi21@gmail.com',
      location: 'Karachi, Pakistan',
    };
  
    return (
      <div>
        <div>
          {props.data} {props.surname}
        </div>
      </div>
    )
  }
  
  export default SecondComponent;