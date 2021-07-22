import React from "react"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { shallow, mount, configure } from "enzyme"
// import { act } from "@testing-library/react"
import Gallery from "../Components/Gallery"
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

configure({ adapter: new Adapter() })

const IMAGES = [{ url: 1 }, { url: 2 }]

describe("Gallery", () => {
  it("renders correctly", () => {
    shallow(<Gallery />)
  })

  it("should call api when gallery is mount", () => {
    const mock = new MockAdapter(axios)
    mock.onGet("/api/images").reply(200, IMAGES);
    mount(<Gallery />)
    // act(() => {
    // })
  })
})