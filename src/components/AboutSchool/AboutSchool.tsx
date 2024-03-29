import React from 'react';
import { Col, Row, Typography, Image } from 'antd';
import s from './aboutSchool.module.css';

const { Paragraph, Title } = Typography;

const AboutSchool: React.FC = () => {
  return (
    <Row>
      <Col span={24}>
        <div className={s.school_img}>
          <Image src="/img/school-img.png" alt="school-img" />
        </div>
        <Typography className={s.typography_block}>
          <Title level={4} className={s.title}>
            Полтавська дитяча музична школа № 2 відкрита 1 вересня 1964 року.
          </Title>
          <Paragraph className={s.text}>
            Рішенням виконавчого комітету Полтавської міської ради № 86 від 09.04.2003 року школі
            присвоєно ім’я Володимира Павловича Шаповаленка – нашого земляка, композитора, хорового
            диригента, музикознавця та журналіста, ведучого музичних передач для дітей та юнацтва на
            українському радіо.
          </Paragraph>
          <Paragraph className={s.text}>
            Школа з перших років свого заснування приймає активну участь в культурному та музичному
            житті міста.
          </Paragraph>
          <Paragraph className={s.text}>
            У школі працює 64 викладача. Вони прививають учням любов до української національної
            культури, вивчають історію розвитку традицій, обрядів, українських національних свят.
            Учні опановують гру майже на всіх музичних інструментах, вивчають твори української
            музичної класики, сучасних композиторів, життєвий та творчий шлях видатних митців
            світової музики.
          </Paragraph>
          <Paragraph className={s.text}>
            В музичній школі працює 7 відділів, на яких навчається 465 учнів, створено 17 учнівських
            творчих колективів, в яких налічується понад 400 учасників. Всі творчі колективи є
            постійними учасниками шкільних, міських та обласних фестивалів, конкурсів та концертів.
          </Paragraph>
          <Paragraph className={s.text}>
            Викладачі та учні школи щороку здобувають високі відзнаки на Міжнародних, Всеукраїнських
            та обласних конкурсах, про що свідчать грамоти, дипломи та подяки. Лише за останній рік
            більше 100 грамот і подяк мають учні школи за вагомий внесок у розвиток українського
            національного мистецтва та за високу виконавську майстерність, із них 39 – міжнародного
            та всеукраїнського рівня.
          </Paragraph>
          <Paragraph className={s.text}>
            Випускники продовжують здобувати мистецьку освіту у вищих навчальних закладах культури і
            мистецтв України.
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export default AboutSchool;
