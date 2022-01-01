import Link from "next/link";
import { useReducer, useState } from "react";
import Meta from '../Components/Meta';
import { useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        firstName: action.payload.title
      };
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        middleName: action.payload.description
      };
    case "UPDATE_IMAGE":
      return {
        ...state,
        lastName: action.payload.image
      };
    case "UPDATE_TAGS":
      return {
        ...state,
        age: action.payload.tags
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        age: action.payload.price
      };
    case "UPDATE_CODE":
      return {
        ...state,
        age: action.payload.code
      };
    case "UPDATE_BODY":
      return {
        ...state,
        age: action.payload.body
      };
    case "UPDATE_BACKTESTS":
      return {
        ...state,
        age: action.payload.backtests
      };
    case "UPDATE_BACKTESTDATES":
      return {
        ...state,
        age: action.payload.backtestdates
      };

    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  title: "",
  description: "",
  image: "",
  tags: "",
  price: "",
  code: "",
  body: "",
  backtests: "",
  backtestdates: "",
};

export default function Indicator({indicators}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([]);

  

  const postData = async () => {
    const response = await fetch("http://localhost:3000/api/indicator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    dispatch({ type: "CLEAR" });
    const indicators = await response.json();
    return setData(indicators);
  };
  return (
    <>
    <Meta title="Trading ThinkScripts || Indicators" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting"/>
    <div style={{ margin: "0 auto", maxWidth: "400px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={state.title}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_Title",
              payload: { title: e.target.value }
            })
          }
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={state.description}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DESCRIPTION",
              payload: { description: e.target.value }
            })
          }
        />
        <label htmlFor="image">Image URL</label>
        <input
          type="url"
          id="image"
          value={state.image}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_IMAGE",
              payload: { image: e.target.value }
            })
          }
        />
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          id="tags"
          value={state.tags}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_TAGS",
              payload: { tags: e.target.value }
            })
          }
        />
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          id="tags"
          value={state.tags}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_TAGS",
              payload: { tags: e.target.value }
            })
          }
        />
      </div>
      <div
        style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
      >
        
        <button onClick={postData}>CREATE</button>
      </div>
      <div>Data:</div>
      {data ? <pre>{JSON.stringify(data, null, 4)}</pre> : null}
      {data.length > 0 ? (
        <div style={{ textAlign: "center" }}>
          Click a button to go to individual page
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center"
            }}
          >
            {data.map((indicator, index) => (
              <Link
                key={index}
                href="/indicator/[id]"
                as={`/indicator/${indicator.id}`}
                passHref
              >
                <span
                  style={{
                    padding: "5px 10px",
                    border: "1px solid black"
                  }}
                >{indicator.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/indicator");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const indicators = await response.json();
    return {
      props: {
        indicators
      }
    }
  };

  export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/indicator`)

    const indicators = await res.json() 

    const ids = indicators.map(indicator => indicator.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
   }
}
  
  
  
 