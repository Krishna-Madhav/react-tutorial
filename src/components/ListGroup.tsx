import { MouseEvent, useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  function handleClick(event: MouseEvent) {
    return console.log(event);
  }

  return (
    <>
      <h1>{heading}</h1>
      {cities.length == 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(item);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
