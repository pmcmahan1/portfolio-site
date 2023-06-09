import avatar from '../assets/avatar.jpg'

export default function Intro() {
  return (
    <div className="intro">
      <div className="head-text">
        <div>
          <div>Hello,</div>
          <div>My name is Patrick.</div>
        </div>
        <img src={avatar} alt="" className="avatar" />
      </div>
      <div className="body-text">
        I'm an inspiring web developer based in Cincinnati, Ohio. During my
        spare time while working as a teacher in Japan, I wanted to learn a new
        skill that would help me in the future. That is when I discovered web
        development and it's plentiful studying resouces online. Currently, I'm
        focused on expanding my skillset on projects using React. If you would like to learn
        more about me or see my recent work, please view my about section and
        projects below!
      </div>
    </div>
  );
}
