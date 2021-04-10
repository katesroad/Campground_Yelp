import { CSSProp } from 'styled-components'

// https://github.com/styled-components/styled-components/issues/2528
declare module 'styled-components' {
  export interface DefaultTheme {
    // Your theme stuff here
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}

export interface IUser extends Record<string, unknown> {
  token: string
  access: string
  username?: string
  email: string
}

export interface IQueryParams {
  limit: number
  offset: number
}

export interface IPagedRes<T> {
  data: T[]
  count: number
}

export type Geometry = {
  type: 'Point'
  coordinates: number[]
}

export type CampgroundImage = {
  public_id: string
  url: string
}
export interface ICampgroundItem {
  id: string
  title: string
  description: string
  price: number
  location: string
  images: CampgroundImage[]
  geometry: Geometry
}

export interface ICampground extends ICampgroundItem {
  created_at: string
  updated_at: string
  author: string
}
