export default function Page() {
  return (
    <>
      <header className="fq7-header">
        <nav className="fq7-nav" aria-label="Основная навигация">
          <a href="#top" className="fq7-logo">
            Fugu Casino
          </a>
          <div className="fq7-navlinks">
            <a href="#official" className="fq7-navlink">
              Официальный сайт
            </a>
            <a href="#mirror" className="fq7-navlink">
              Зеркало
            </a>
            <a href="#play" className="fq7-navlink">
              Играть
            </a>
          </div>
        </nav>
      </header>

      <main className="fq7-main">
        <section className="fq7-hero" id="top">
          <div className="fq7-heroinner">
            <div>
              <h1 className="fq7-h1">Fugu Casino — официальный сайт</h1>
              <p className="fq7-lead">
                Fugu Casino — это современное онлайн-казино, где собраны лучшие
                слоты, рулетка и карточные игры. Здесь каждый игрок находит
                честные условия, быстрые выплаты и понятный интерфейс. Начните
                играть прямо сейчас — регистрация занимает меньше минуты.
              </p>
              <a href="#play" className="fq7-cta">
                Играть онлайн
              </a>
            </div>
          </div>
          <img
            src="/images/fq7-hero.jpg"
            alt="Рулетка, карты и золотые фишки на зелёном сукне казино Fugu Casino"
            className="fq7-heroimg"
            width="1200"
            height="509"
            fetchPriority="high"
          />
        </section>

        <section className="fq7-block" id="official">
          <div className="fq7-blockinner">
            <h2 className="fq7-h2">Fugu Casino официальный сайт</h2>
            <p className="fq7-text">
              Официальный сайт Fugu Casino — это единственное место, где вы
              получаете полный доступ к играм, бонусам и акциям. Только на
              официальном сайте Fugu Casino ваши данные и средства находятся
              под надёжной защитой. Мы советуем заходить именно через
              официальный сайт Fugu Casino, чтобы не столкнуться с подделками и
              мошенниками. Здесь всегда актуальная версия игр, свежие новости и
              честные правила.
            </p>
          </div>
        </section>

        <section className="fq7-block fq7-block-alt" id="mirror">
          <div className="fq7-blockinner">
            <h2 className="fq7-h2">Fugu Casino зеркало — рабочее зеркало</h2>
            <p className="fq7-text">
              Если доступ к основному адресу временно ограничен, на помощь
              приходит рабочее зеркало Fugu Casino. Зеркало Fugu Casino
              полностью повторяет функционал официального сайта: те же игры,
              тот же аккаунт и те же бонусы. Рабочее зеркало Fugu Casino
              обновляется регулярно, поэтому вы всегда остаётесь в игре и не
              теряете прогресс. Сохраните ссылку на зеркало, чтобы вход был
              всегда под рукой.
            </p>
            <img
              src="/images/fq7-fugu.jpg"
              alt="Талисман Fugu Casino — рыба фугу с золотой фишкой"
              className="fq7-art"
              width="800"
              height="436"
              loading="lazy"
            />
          </div>
        </section>

        <section className="fq7-block" id="play">
          <div className="fq7-blockinner">
            <h2 className="fq7-h2">Fugu Casino играть онлайн</h2>
            <p className="fq7-text">
              Играть в Fugu Casino онлайн можно с любого устройства — телефона,
              планшета или компьютера. Онлайн-режим не требует установки
              программ: достаточно открыть сайт и выбрать игру. В Fugu Casino
              играть онлайн удобно и безопасно, а вывод выигрышей занимает
              считанные минуты. Все слоты и рулетка работают прямо в браузере
              без загрузок.
            </p>
          </div>
        </section>

        <section className="fq7-block fq7-block-alt" id="start">
          <div className="fq7-blockinner">
            <h2 className="fq7-h2">Фугу казино — как начать играть</h2>
            <p className="fq7-text">
              Фугу казино создано для простых игроков. Чтобы начать,
              зарегистрируйтесь на официальном сайте Фугу казино, пополните
              счёт удобным способом и выберите слот. Фугу казино официальный
              сайт всегда доступен, а если он временно не открывается,
              используйте Фугу казино зеркало рабочее. Фугу казино онлайн
              предлагает бонусы новым игрокам и регулярные турниры. Играть в
              Фугу казино можно и с телефона — сайт отлично работает на любом
              экране.
            </p>
          </div>
        </section>

        <section className="fq7-block" id="why">
          <div className="fq7-blockinner">
            <h2 className="fq7-h2">Почему выбирают Фугу казино</h2>
            <p className="fq7-text">
              Фугу казино ценят за простоту и честность. Каждый новый игрок
              получает приветственный бонус, а постоянные — кэшбэк и участие в
              турнирах. Выплаты проходят быстро, а служба поддержки отвечает
              круглосуточно. Fugu казино — это надёжный выбор для тех, кто
              ценит своё время.
            </p>
            <ul className="fq7-list">
              <li className="fq7-item">Быстрая регистрация за одну минуту</li>
              <li className="fq7-item">Честные выплаты без задержек</li>
              <li className="fq7-item">Приветственный бонус новым игрокам</li>
              <li className="fq7-item">Поддержка работает круглосуточно</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="fq7-footer">
        <div className="fq7-footinner">
          <p className="fq7-footbrand">Fugu Casino</p>
          <div className="fq7-tags">
            <a href="#top" className="fq7-tag">
              #fugu casino
            </a>
            <a href="#official" className="fq7-tag">
              #fugu casino официальный
            </a>
            <a href="#official" className="fq7-tag">
              #fugu casino официальный сайт
            </a>
            <a href="#mirror" className="fq7-tag">
              #fugu casino зеркало
            </a>
            <a href="#play" className="fq7-tag">
              #fugu casino играть
            </a>
            <a href="#top" className="fq7-tag">
              #фугу казино
            </a>
            <a href="#official" className="fq7-tag">
              #фугу казино официальный
            </a>
            <a href="#mirror" className="fq7-tag">
              #фугу казино зеркало
            </a>
            <a href="#mirror" className="fq7-tag">
              #фугу казино зеркало рабочее
            </a>
            <a href="#play" className="fq7-tag">
              #фугу казино играть
            </a>
            <a href="#play" className="fq7-tag">
              #фугу казино онлайн
            </a>
            <a href="#official" className="fq7-tag">
              #фугу казино официальный сайт
            </a>
          </div>
          <p className="fq7-copy">
            © 2026 Fugu Casino. Играйте ответственно. 18+
          </p>
        </div>
      </footer>
    </>
  )
}
