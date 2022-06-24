import Typography from "../typography";
import {
  RowCard,
  TitleDiv,
  ColumnContainer,
  VerticalHR,
} from "./expandedWeek.styled";
import { RunType } from "../../../types/types";
import { StyledHR } from "../../shared/shared.styled";

const ExpandedWeek = () => {
  const days = [
    {
      day: "Monday",
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
      day: "Tuesday",
      type: RunType.workout,
      content: {
        mileage: "8",
        am: "8",
        pm: "",
        workout: "",
        notes: "",
      },
    },
    {
      day: "Wednesday",
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
      day: "Thursday",
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
      day: "Friday",
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
      day: "Saturday",
      type: RunType.race,
      content: {
        mileage: "10",
        am: "10",
        pm: "0",
        workout: "",
        notes: "",
      },
    },
    {
      day: "Sunday",
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
          <RowCard>
            <TitleDiv>
              <ColumnContainer type={getTypeColor(day.type)}>
                <Typography
                  type="h3"
                  style={{ color: "black", textAlign: "start" }}
                >
                  {day.day}
                  <StyledHR expanded={false} />
                </Typography>
              </ColumnContainer>
              <VerticalHR style={{ color: "black" }} />
            </TitleDiv>
            <div style={{ marginLeft: "10px" }}>
              <p>Mileage: {day.content.mileage}</p>
              <p>AM: {day.content.am}</p>
              <p>PM: {day.content.pm}</p>
              <p>Workout: {day.content.workout}</p>
              <p>Notes: {day.content.notes}</p>
            </div>
          </RowCard>
        );
      })}
    </>
  );
};

export default ExpandedWeek;
