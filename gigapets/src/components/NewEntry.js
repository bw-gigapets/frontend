import React from "react";
import styled from "styled-components";
import moment from "moment";



export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #63d4b9;
  max-width: 500px;
  margin: 0 auto;
  border: 1px outset rgb(200, 200, 200);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 12px 12px 2px 1px rgba(184, 209, 200)
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.2rem;
  letter-spacing: 0.05rem;
  align-self: stretch;
  color: white;
  margin: auto;
  padding: 10px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const Input = styled.input`

  font-size: 14px;
  width: 100%;
  padding: 3px;
  margin: 5px 0;
  outline-color: purple;
  &::selection {
    background: lighterPurple;
    color: white;
  }
`;

export const Select = styled.select`
  font-family: fonts.handwriting;
  font-size: 14px;
  width: 260px;
  padding: 3px 0;
  margin: 5px 0;
  outline-color: colors.purple;
  &::selection {
    background: lighterPurple;
    color: white;
  }
`;

export const Option = styled.option`
  color: black;
`;

export const ButtonBox = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-size: 16px;
  background: rgba(230, 145, 145);
  color: white;
  padding: 5px 10px;
  margin: 10px;
  border-color: lightgrey;
  border-radius: 5px;
  user-select: none;
  outline: none;
  &:active {
    background: purple;
    border-color: purple;
  }
`;

export const InputButton = styled(Button)`
  display: ${props => (props.updateTog ? "none" : "inline-block")};
`;

class AddEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
        childId: "x",
        food: "",
        servings: "",
        date: "",
        category: "x"
      }
    };
  }

  componentDidMount() {
    const date = moment().format("YYYY-MM-DD");
    this.setState({
      input: {
        ...this.state.input,
        date: date
      }
    });
  }

  changeHandler = ev => {
    this.setState({
      input: { ...this.state.input, [ev.target.name]: ev.target.value }
    });
  };

  submitHandler = ev => {
    ev.preventDefault();
    const inp = this.state.input;
    if (
      inp.childId === "x" ||
      inp.food === "" ||
      inp.servings === "" ||
      inp.category === "x"
    ) {
      return;
    }
    const selectedChild = this.props.kids.find(el => {
      return el.id == inp.childId;
    });
    const newEntry = {
      name: selectedChild.name,
      mealTime: "lunch",
      foodType: inp.category,
      foodName: inp.food,
      parentId: localStorage.getItem("currentUserId"),
      date: inp.date,
      childId: selectedChild.id
    };
    this.props.postFood(newEntry);
    this.setState({
      input: {
        childId: "x",
        food: "",
        date: moment().format("YYYY-MM-DD"),
        category: "x",
        servings: ""
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Title>ADD FOOD ENTRY</Title>
        <InputBox spellCheck="false">
          <Select
            placeholder={this.state.input.childId === "x"}
            name="childId"
            value={this.state.input.childId}
            onChange={this.changeHandler}
            required
          >
            <Option value="x" hidden>
              Child
            </Option>
            {this.props.kids &&
              this.props.kids.map(el => {
                return <Option value={el.id}>{el.name}</Option>;
              })}
          </Select>
          <Input
            type="text"
            name="food"
            placeholder="Food"
            value={this.state.input.food}
            onChange={this.changeHandler}
            required
          />
          <Select
            placeholder={this.state.input.category === "x"}
            name="category"
            value={this.state.input.category}
            onChange={this.changeHandler}
            required
          >
            <Option value="x" hidden>
              Category
            </Option>
            <Option value="vegetables">Vegetables</Option>
            <Option value="fruits">Fruits</Option>
            <Option value="grains">Grains</Option>
            <Option value="dairy">Dairy</Option>
            <Option value="proteins">Proteins</Option>


            
          </Select>
          <Input
            type="number"
            name="servings"
            placeholder="Servings"
            value={this.state.input.servings}
            onChange={this.changeHandler}
            required
          />
          <Input
            type="date"
            name="date"
            value={this.state.input.date}
            onChange={this.changeHandler}
            required
          />
        </InputBox>
        <ButtonBox>
          <InputButton onClick={this.submitHandler}>
            Feed Gigapet
          </InputButton>
        </ButtonBox>
      </Form>
    );
  }
}

export default AddEntry;
