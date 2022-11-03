import benefitsIcon1 from '../../images/benefits1.svg'
import benefitsIcon2 from '../../images/benefits.svg'
import benefitsIcon3 from '../../images/benefits3.svg'
import benefitsIcon4 from '../../images/benefits4.svg'
const Benefits = () => {
    return (
        <div className="benefits_Wrapper">
            <div className="benefits__container">
                <div className="benefits_desc">
                    <li>Наши</li>
                    <li>Преимущества</li>
                    <li>Основная ценность нашей компании - создание качественного продукта и<br/> удовлетворение потребностей клиента. Поэтому перед началом разработки мы<br/> проводим маркетинговые исследования и помогаем клиенту определить стратегию<br/> развития продукта.
</li>
                </div>
                <div className="benefits_content">
                    <div className="content_item">
                        <div className="img_benefits">
                            <img src={benefitsIcon1} alt="" />
                        </div>
                        <li>Разработка программного<br/> обеспечения</li>
                        <li>Мы обеспечиваем полный цикл<br/> разработки программного <br/>обеспечения, развертывания и <br/>послерелизной поддержки. Вы<br/> получите функциональный,<br/> масштабируемый и безопасный <br/>продукт, идеально подходящий <br/>для бизнеса.
MVP за 90 дней.</li>
                    </div>
                    <div className="content_item">
                        <div className="img_benefits">
                            <img src={benefitsIcon3} alt="" />
                        </div>
                        <li>«Спасение» вашего проекта</li>
                        <li>Мы присоединяемся к любому<br/> этапу разработки, анализируем <br/>текущее состояние продукта, <br/>возвращаем процесс разработки<br/> в нужное русло и выпускаем <br/>продукт вовремя.</li>
                    </div>
                    <div className="content_item">
                        <div className="img_benefits">
                            <img src={benefitsIcon2} alt="" />
                        </div>
                        <li>Создание выделенного <br/> ИТ-центра</li>
                        <li>Мы предоставляем выделенные<br/> команды на полный рабочий<br/> день, включающие аналитиков,<br/> дизайнеров, разработчиков, QA-<br/>инженеров и менеджеров<br/> проектов. Соберите свою<br/> команду всего за несколько<br/> дней.</li>
                    </div>
                    <div className="content_item">
                        <div className="img_benefits">
                            <img src={benefitsIcon4} alt="" />
                        </div>
                        <li>Профессионализм команды</li>
                        <li>Избегайте затрат на инвестиции<br/> в развитие внутренних навыков. <br/>Нанимайте профессионалов с <br/>необходимыми навыками для<br/> обеспечения результатов<br/> проекта и своевременной <br/>доставки.</li>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Benefits;