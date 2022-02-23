import React, { useEffect, useRef, useState } from "react";
const Model = ({
  model,
  setModel,
  modelForRemove,
  setModelForRemove,
  setValueChanged,
  valueChanged,
}) => {
  const closeModel = () => {
    setModel(false);
  };
  const closeModelOfRemoveItem = () => {
    setModelForRemove(false);
  };
  const closeModelForValueChanged = () => {
    setModel(false);
    setValueChanged(false);
  };

  useEffect(() => {
    setTimeout(() => {
      closeModelForValueChanged();
      closeModel();
      closeModelOfRemoveItem();
    }, 3000);
  }, [model, modelForRemove, valueChanged]);
  return (
    <>
      <div>
        <h1>{!valueChanged && model ? "item added" : ""}</h1>
        <h1>{modelForRemove ? "item removed" : ""}</h1>
        <h1>{valueChanged ? "One item changed" : ""}</h1>
      </div>
    </>
  );
};
const GroceryBud = () => {
  const [list, setList] = useState([]);
  const [editButton, setEditButton] = useState(false);
  const [model, setModel] = useState(false);
  const [modelForRemove, setModelForRemove] = useState(false);
  const [valueChanged, setValueChanged] = useState(false);
  const inputValue = useRef(null);
  const buttonValue = useRef(null);

  const removeItem = (listId) => {
    setModel(!model);
    const newList = list.filter((each) => {
      return each.id !== listId;
    });
    setList(newList);
    setModelForRemove(true);
    setModel(false);
  };
  const editItem = (listId) => {
    setEditButton(!editButton);
    const newList = list.filter((eachList) => {
      return eachList.id !== listId;
    });
    const edit = list.find((eachList) => {
      return eachList.id === listId;
    });
    setList(newList);
    console.log(edit);
    inputValue.current.value = edit.item;
  };
  const clearAll = () => {
    setList([]);
  };
  const addList = (item) => {
    const innerText = buttonValue.current;
    // console.log(innerText.innerHTML);
    if (innerText.innerHTML == "edit") {
      setValueChanged(true);
      setModel(false);

      console.log("ok ok");
    }
    setModel(true);
    setList([...list, { id: new Date().getTime().toString(), item }]);
    console.log(list);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const newItem = inputValue.current.value;
    addList(newItem);
    inputValue.current.value = "";
    setEditButton(false);

    // console.log(buttonValue.current);
  };
  return (
    <>
      <div
        className="groceryBud"
        id="groceryBud"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="model">
          <Model
            model={model}
            setModel={setModel}
            modelForRemove={modelForRemove}
            setModelForRemove={setModelForRemove}
            setValueChanged={setValueChanged}
            valueChanged={valueChanged}
          />
        </div>
        <form>
          <input type="text" ref={inputValue} />
          <button type="submit" onClick={handleChange} ref={buttonValue}>
            {editButton ? "edit" : "submit"}
          </button>
        </form>

        {list.map((eachList) => {
          const { id, item } = eachList;
          return (
            <div className="list" key={id}>
              <div className="text">
                <h3>{item}</h3>
              </div>
              <button onClick={() => editItem(id)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button onClick={() => removeItem(id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          );
        })}
        <button onClick={clearAll}>Clear</button>
      </div>
    </>
  );
};

export default GroceryBud;
