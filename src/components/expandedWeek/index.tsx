import Typography from "../typography";
import {
  RowCard,
  TitleDiv,
  ColumnContainer,
  VerticalHR,
  ContentColumn,
} from "./expandedWeek.styled";
import { RunType } from "../../../types/types";
import { StyledHR } from "../../shared/shared.styled";

const ExpandedWeek = () => {
  const dayWords = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthWords = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    {
      day: new Date(2022, 5, 20),
      type: RunType.easy,
      content: {
        mileage: "10",
        am: "5",
        pm: "5",
        workout: "None",
        notes: "",
      },
    },
    {
      day: new Date(2022, 5, 21),
      type: RunType.workout,
      content: {
        mileage: "8",
        am: "8",
        pm: "",
        workout: "6x800",
        notes: "",
      },
    },
    {
      day: new Date(2022, 5, 22),
      type: RunType.med,
      content: {
        mileage: "10",
        am: "10",
        pm: "",
        workout: "",
        notes: "",
      },
    },
    {
      day: new Date(2022, 5, 23),
      type: RunType.easy,
      content: {
        mileage: "10",
        am: "5",
        pm: "5",
        workout: "",
        notes: "",
      },
    },
    {
      day: new Date(2022, 5, 24),
      type: RunType.easy,
      content: {
        mileage: "6",
        am: "6",
        pm: "",
        workout: "",
        notes: "",
      },
    },
    {
      day: new Date(2022, 5, 25),
      type: RunType.race,
      content: {
        mileage: "10",
        am: "10",
        pm: "0",
        workout: "",
        notes: "8k race",
      },
    },
    {
      day: new Date(2022, 5, 26),
      type: RunType.long,
      content: {
        mileage: "12",
        am: "12",
        pm: "0",
        workout: "",
        notes: "",
      },
    },
  ];
  const getTypeColor = (type: RunType) => {
    console.log("type", type);
    switch (type) {
      case RunType.easy:
        return "blue";
      case RunType.workout:
        return "red";
      case RunType.race:
        return "yellow";
      case RunType.long:
        return "purple";
      case RunType.med:
        return "orange";
    }
  };

  return (
    <>
      {days.map((day) => {
        return (
          <RowCard key={day.day.toString()}>
            <TitleDiv>
              <ColumnContainer type={getTypeColor(day.type)}>
                <Typography
                  type="h3"
                  style={{ color: "black", textAlign: "start" }}
                >
                  {dayWords[day.day.getDay()]}
                </Typography>
                <StyledHR expanded={false} />
                <Typography
                  type="h3"
                  style={{
                    color: "black",
                    textAlign: "start",
                    marginTop: "auto",
                  }}
                >
                  {monthWords[day.day.getMonth()]}
                </Typography>
                <Typography
                  type="h3"
                  style={{
                    color: "black",
                    textAlign: "start",
                    marginBottom: "auto",
                  }}
                >
                  {day.day.getDate()}
                </Typography>
              </ColumnContainer>
            </TitleDiv>
            <ContentColumn style={{ marginLeft: "10px", gap: "10px" }}>
              <Typography type="h3">Mileage: {day.content.mileage}</Typography>
              <Typography type="h5">AM: {day.content.am}</Typography>
              <Typography type="h5">PM: {day.content.pm}</Typography>
            </ContentColumn>
            <VerticalHR
              style={{ height: "90%", marginLeft: "30px", marginRight: "30px" }}
            />
            <ContentColumn>
              <Typography type="h3">Workout</Typography>
              <StyledHR expanded={false} />
              <Typography type="h5">{day.content.workout}</Typography>
            </ContentColumn>
            <VerticalHR
              style={{ height: "90%", marginLeft: "30px", marginRight: "30px" }}
            />
            <ContentColumn>
              <Typography type="h3">Notes</Typography>
              <StyledHR expanded={false} />
              <Typography type="h5">{day.content.notes}</Typography>
            </ContentColumn>
          </RowCard>
        );
      })}
    </>
  );
};

export default ExpandedWeek;
