# giới thiệu dự án photo app

# mục tiêu

xây dựng một ứng dụng để sử dụng được redux trong react

- tập trung vào `redux` với `redux-toolkit`
- sử dụng hooks
- sử dụng ui lib: `reactstrap`
- học cách sử dụng form với `formik`
- học cách validate form với `yup`
- học cách tổ chức API

# project này build cái gì

`PHOTO APP`

- App đơn giản để quản lý hình ảnh yêu thích, được chọn lựa từ https://picsum.photos/
- CRUD
- gồm có 2 trang: -`HOME`: listing + view + delete -`AddEdit`: dùng để tạo mới + sửa thông tin của một photo
- Các chức năng:
  - Render danh sách photo yêu thích
  - Lọc photo theo category
  - thêm mới một photo
  - chỉnh sửa một photo
  - remove một photo

## công nghệ được sử dụng trong project này

    - ReactJS
    - Redux (redux toolkit)
    - form management: formik
    - routings: react router
    - ui lib: reactstrap
    - validate form: yup

## học được gì

    - tổ chức được folder, files trong thực tế
    - sử dụng redux tốt hơn với redux toolkit
    - thiết kế routing trong reactjs app.
    - sử dụng một thư viện ui bên ngoài để làm ui

`###########################`

### 1. Setup ReactJS App via Create React App

Link: https://create-react-app.dev/docs/getting-started/

### 2. Add SCSS support

npm i --save-dev node-sass

### 3. Add react router

npm i --save react-router-dom

### 4. Add UI lib

npm i --save reactstrap

## Tổ chức folder

```
src
|__ assets
|  |__ images
|  |__ styles (global styles)
|
|__ components (shared components)
|
|__ features
  |__ Photo
    |__ components
    |  |__ PhotoList
    |  |__ PhotoCard
    |  |__ PhotoForm
    |
    |__ pages
    |  |__ MainPage
    |  |__ AddEditPage
    |__ photoSlice.js
    |__ index.js
```

## Tổ chức routing

- Sử dụng kĩ thuật lazy load components.
- Load theo features.

```js
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photos" component={Photo} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
```
