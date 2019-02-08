import React from "react";
import { shallow } from "enzyme";
import GoingoutCard from "./GoingoutCard";

describe('goingout card', () => {
  let component = null;
  const mockOnChangeCard = jest.fn();

  it('renders correctly', () => {
    component = shallow(
      <GoingoutCard
        gooutDate='2019-01-01 08:00'
        returnDate='2019-01-01 09:00'
        reason='아침 식사 외출(서브웨이)'
        selectedClass={undefined}
        onChangeCard={mockOnChangeCard}
        id={123}
      />
    );
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls props function', () => {
    const wrapper = component.find('.apply--goingout--card');
    wrapper.simulate('click');
    expect(mockOnChangeCard.mock.calls.length).toBe(1);
  });
});
