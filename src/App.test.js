/**************************testing using jest and enzyme******************************************** */
import { shallow, mount } from "enzyme";
import App from "./App";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const inputProps = {
  todo: "myTodo",
  setTodo: () => {},
  handleAdd: () => {},
};

describe("rendering components", () => {
  it("renders app component without crashing", () => {
    shallow(<App />);
  });
  it("render app component title without crashing", () => {
    const wrapper = shallow(<App />);
    const headerTitle = <span className="heading">Taskify</span>;
    expect(wrapper.contains(headerTitle)).toEqual(true);
  });
  it("render InputField component without crashing", () => {
    shallow(<InputField />);
  });
  it("render TodoList component without crashing", () => {
    shallow(<TodoList />);
  });
  it("render form button", () => {
    let wrapper = shallow(<InputField />);
    const btnLabel = wrapper.find(".input_submit").text();
    expect(btnLabel).toEqual("GO");
  });
});

describe("passing props", () => {
  it("inputField component accepts props", () => {
    const inputFieldWrapper = mount(<InputField {...inputProps} />);
    expect(inputFieldWrapper.props().handleAdd).toEqual(inputProps.handleAdd);
  });
  it("testing input events", () => {
    const wrapper = mount(<App />);
    const textField = wrapper.find(".input__box");
    const todosWrapper = wrapper.find(".todos__single");
    textField.props().onChange({ target: { value: "New Task" } });
    textField.simulate("change");
    wrapper.find(".input_submit").simulate("click");

    expect(wrapper.find(".input__box").props().value).toBe("New Task");
  });
});
