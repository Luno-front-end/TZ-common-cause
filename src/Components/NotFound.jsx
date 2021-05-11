import Container from "./Container/Container";

export default function NotFound() {
  return (
    <div className="container-notFound">
      <Container>
        <div className="wrapper-notFound">
          <h1 className="heading-notFound">404 NotFound 😟</h1>
          <p className="paragraph-notFound">{`УПСС! Пожалуйста пойдите отсюда. Позже мы что-то здесь сделаем. Или у нас отсутствует такая страница :)`}</p>
        </div>
      </Container>
    </div>
  );
}
