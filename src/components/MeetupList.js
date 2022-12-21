import Meetup from "./Meetup";
import classes from "./MeetupList.module.css";
function MeetupList() {
  const meetupData = [
    {
      id: "firstMeet",
      img: "https://images.pexels.com/photos/12425829/pexels-photo-12425829.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "First Meetup",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat culpa modi veritatis possimus molestias?",
    },
    {
      id: "secondMeet",
      img: "https://images.pexels.com/photos/10011643/pexels-photo-10011643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Second Meetup",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat culpa modi veritatis possimus molestias?",
    },
    {
      id: "thirdMeet",
      img: "https://images.pexels.com/photos/6042966/pexels-photo-6042966.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Third Meetup",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat culpa modi veritatis possimus molestias?",
    },
  ];
  return (
    <>
      <div className={classes.container}>
        {meetupData.map((meetup) => {
          return (
            <Meetup
              key={meetup.id}
              title={meetup.title}
              img={meetup.img}
              description={meetup.description}
            />
          );
        })}
      </div>
    </>
  );
}
export default MeetupList;
