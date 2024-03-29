import React, { useState, useEffect } from 'react'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/antd'
import {
  Input,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  NumberPicker,
  TimePicker,
  Upload,
  Switch,
  Range,
  Transfer,
  Rating
} from '@formily/antd-components'

const components = {
  Input,
  Radio:           Radio.Group,
  Checkbox:        Checkbox.Group,
  TextArea:        Input.TextArea,
  NumberPicker,
  Select,
  Switch,
  DatePicker,
  DateRangePicker: DatePicker.RangePicker,
  YearPicker:      DatePicker.YearPicker,
  MonthPicker:     DatePicker.MonthPicker,
  WeekPicker:      DatePicker.WeekPicker,
  TimePicker,
  TimeRangePicker: TimePicker.RangePicker,
  Upload,
  Range,
  Rating,
  Transfer
}

const getInitialValues = () => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove({
        daterange: ['2018-12-19', '2018-12-19'],
        string: 'this is string',
        radio: '2',
        checkbox: ['2', '3', '4'],
        textarea:
          'this is long text.this is long text.this is long text.this is long text.this is long text.',
        rating: 3,
        transfer: [1, 2],
        range: 384,
        date: '2020-02-20',
        month: '2020-08',
        time: '22:29:53',
        timerange: ['9:00:00', '18:00:00'],
        week: '2020-9th',
        number: 123,
        boolean: true,
        select: '2'
      })
    }, 1000)
  })
}

const App = () => {
  const [initialValues, setIntialValues] = useState({})
  useEffect(() => {
    getInitialValues().then(initialValues => {
      setIntialValues(initialValues)
    })
  }, [])
  return (
    <SchemaForm 
      initialValues={initialValues}
      editable={false}
      labelCol={5} wrapperCol={14}
      components={components} onSubmit={(value) => console.log(value)}>
      <Field type="string" title="String" name="string" x-component="Input" />
      <Field
        type="string"
        enum={['1', '2', '3', '4']}
        title="Radio"
        name="radio"
        x-component="Radio"
      />
      <Field
        type="string"
        enum={['1', '2', '3', '4']}
        title="Select"
        name="select"
        x-component="Select"
      />
      <Field
        type="string"
        enum={['1', '2', '3', '4']}
        title="Checkbox"
        name="checkbox"
        x-component="Checkbox"
      />
      <Field
        type="string"
        title="TextArea"
        name="textarea"
        x-component="TextArea"
      />
      <Field
        type="number"
        title="数字选择"
        name="number"
        x-component="NumberPicker"
      />
      <Field
        type="boolean"
        title="开关选择"
        name="boolean"
        x-component="Switch"
      />
      <Field
        type="string"
        title="日期选择"
        name="date"
        x-component="DatePicker"
      />
      <Field
        type="array<date>"
        title="日期范围"
        default={['2018-12-19', '2018-12-19']}
        name="daterange"
        x-component="DateRangePicker"
      />
      <Field type="string" title="年份" name="year" x-component="YearPicker" />
      <Field
        type="string"
        title="月份"
        name="month"
        x-component="MonthPicker"
      />
      <Field type="string" title="时间" name="time" x-component="TimePicker" />
      <Field
        type="string"
        title="时间范围"
        name="timerange"
        x-component="TimeRangePicker"
      />
      <Field type="string" title="周" name="week" x-component="WeekPicker" />
      <Field
        type="array"
        title="卡片上传文件"
        name="upload"
        x-component-props={{ listType: 'card' }}
        x-component="Upload"
      />
      <Field
        type="array"
        title="拖拽上传文件"
        name="upload2"
        x-component-props={{ listType: 'dragger' }}
        x-component="Upload"
      />
      <Field
        type="array"
        title="普通上传文件"
        name="upload3"
        x-component-props={{ listType: 'text' }}
        x-component="Upload"
      />
      <Field
        type="number"
        title="范围选择"
        name="range"
        x-component-props={{ min: 0, max: 1024, marks: [0, 1024] }}
        x-component="Range"
      />
      <Field
        type="number"
        enum={[
          { key: 1, title: '选项1' },
          { key: 2, title: '选项2' }
        ]}
        x-component-props={{ render: item => item.title }}
        title="穿梭框"
        name="transfer"
        x-component="Transfer"
      />
      <Field type="number" title="等级" name="rating" x-component="Rating" />
      <FormButtonGroup offset={5}>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  )
}

export default App