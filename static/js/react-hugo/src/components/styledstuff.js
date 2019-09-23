import React,{Component} from "react"
import {Field} from "formik"
import styled from 'styled-components'

export const Title = styled.h1.attrs({
  className: "f6 f5-ns fw6 lh-title dark-green mv0",
})``

export const input = styled.input.attrs({
  className: "mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box",
})``

export const MyField = styled(Field).attrs({
  className: "mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box",
})``

export const Myform = styled.form.attrs({
  className: "ba bw1 b--red",
})``