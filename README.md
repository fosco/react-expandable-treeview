# react-expandable-treeview 
[![npm version](https://badge.fury.io/js/react-expandable-treeview.svg)](https://badge.fury.io/js/react-expandable-treeview)

A simple and fully customizable tree view React component

Check out the [live demo!](http://react-expandable-treeview.surge.sh)

## Quick start
1. Install the package using `yarn add react-expandable-treeview` or `npm install react-expandable-treeview`

2. Import the `TreeView` component

```javascript 
import TreeView from 'react-expandable-treeview';
```

3. Define the data you want to pass to `TreeView`. It should be a recursive array of elements with an unique `id` and a `children` optional prop for children elements. Each one of them will be rendered as a tree node. Here is the base object model:

```javascript
    {
        id: 0,
        hasChildren: true,
        children: [
            //...all the children elements*/
        ],
        // ...other user-defined object properties
    }
```

And an example of the `data` prop o be passed to `TreeView` component.
```javascript
const data = [
    {
        id: 0,
        hasChildren: true,
        children: [
            {
                id: 1,
                hasChildren: false
            },
            {
                id: 2,
                hasChildren: false
            }
        ],
        id: 3,
        hasChildren: true,
        children: [
            {
                id: 4,
                hasChildren: true,
                children: [
                    {
                        id: 5,
                        hasChildren: false
                    }
                ]
            }
        ]
    }
]
```

4. The `TreeView` component has two required props: `data` and `renderNode`. The `renderNode` prop is a function that allows you to represent the nodes of the tree as fully customizable React components: you can define their structure.
In the example we add a custom `label` attribute to our `data` elements and we want it to be rendered.
```javascript
const data = [
    {
        id: 0,
        label: 'A Father',
        hasChildren: true,
        children: [
            {
                id: 1,
                label: 'A Son',
                hasChildren: false
            },
            {
                id: 2,
                label: 'Another Son',
                hasChildren: false
            }
        ],
        id: 3,
        label: 'Another Father',
        hasChildren: true,
        children: [
            {
                id: 4,
                hasChildren: true,
                children: [
                    {
                        id: 5,
                        label: 'Yet Another Son',
                        hasChildren: false
                    }
                ]
            }
        ]
    }
]
```
Now we can render the component inside our application:
```javascript
<TreeView
    data={data}
    renderNode={({ label }) => <div>{label}</div>}
/>
```

## Props
Here are the props you can pass to `TreeView`.

| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| data| `array`| `required`|- | The data to display. |
| renderNode| `func`| `required` | - | The node render function |
| lineColor| `string`| optional | `'#4B6DAA'` | The color of the tree lines |
| lineWidth| `number`| optional | `0.5` | Thickness of the tree lines |
| lineStyle| `string`| optional | `'solid'` | Style of the tree lines. Can be `'solid'`, `'dotted'`, etc. (all the possible values for `'border-style'` CSS attribute) |
| lineAlpha| `number`| optional | 0.4 | The alpha value of the tree lines |
| expandButtonColor | `string`| optional | `'#4B6DAA'` | The color of the expand button |
| nodeSize| `number`| optional | 20 | The size of the tree leaf icons |
| nodeIcon| `string`| optional | [blue dot] | The node icon. Must be a base64 imported image |
