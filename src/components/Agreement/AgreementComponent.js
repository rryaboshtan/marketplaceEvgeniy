import { Container } from './Agreement.styled';

export default function AgreementComponent() {
  return (
    <Container>
      <h1>Угода користувача</h1>
      <ul>
        <li>
          <h2>1. Загальні положення</h2>
          <p>
            Ця угода (далі - "Угода") регулює умови використання маркетплейсу
            "Dealok" (далі - "Платформа"). Реєструючись на Платформі, ви
            погоджуєтесь з умовами цієї Угоди.
          </p>
        </li>
        <li>
          <h2>2. Реєстрація та доступ до послуг</h2>
          <p>
            2.1. Для використання послуг Платформи користувач повинен пройти
            реєстрацію, надавши достовірну інформацію про себе.
          </p>
          <p>
            2.2. Користувач несе відповідальність за збереження конфіденційності
            свого облікового запису та паролю.
          </p>
        </li>
        <li>
          <h2>3. Права та обов'язки користувача</h2>
          <p>
            3.1. Користувач зобов'язується не використовувати Платформу для
            розповсюдження незаконного контенту або товарів.
          </p>
          <p>
            3.2. Користувач зобов'язується не порушувати права інших
            користувачів та третіх осіб.
          </p>
        </li>
        <li>
          <h2>4. Права та обов'язки адміністрації Платформи</h2>
          <p>
            4.1. Адміністрація залишає за собою право блокувати або видаляти
            облікові записи користувачів, які порушують умови цієї Угоди.
          </p>
          <p>
            4.2. Адміністрація не несе відповідальності за дії користувачів на
            Платформі.
          </p>
        </li>
        <li>
          <h2>5. Відмова від відповідальності</h2>
          <p>
            5.1. Платформа надається "як є". Адміністрація не гарантує
            безперебійної роботи Платформи.
          </p>
          <p>
            5.2. Адміністрація не несе відповідальності за можливі збитки, що
            виникли внаслідок використання Платформи.
          </p>
        </li>
        <li>
          <h2>6. Зміни в Угоді</h2>
          <p>
            6.1. Адміністрація залишає за собою право змінювати умови цієї
            Угоди. Про зміни користувачі будуть повідомлені через Платформу.
          </p>
        </li>
      </ul>
    </Container>
  );
}
