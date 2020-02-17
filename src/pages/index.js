import React from "react"
import {Link} from "gatsby"
import {Helmet} from "react-helmet"
import Form from "../components/Form"
import "../css/style.css"
import "../css/fonts/fonts.css"
import Logo from "../img/logo.png"
import Cyprus from "../img/cyprus.jpg"
import Saint from "../img/saint.jpg"
import Mauritius from "../img/mauritius.jpg"
import PDF from "../components/PDF.js"
import $ from "jquery"


class Basic extends React.Component {

  componentDidMount() {
    $('.goto > a').click(function(){
        $('html, body').stop().animate({ scrollTop: $('#'+$(this).attr('class')).offset().top }, 1000);
    });
  }


    render(){
      return (
          <>
          <Helmet>
          <meta charSet="utf-8" />
          <title>Ars Lex Limited</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
          <div className="box">
                    <div className="toptext-wrapper">
                        <div className="topline-wrapper" id="link1">
                            <div className="topline">
                                <ul>
                                    <li className="top-phone">+357 99 744249</li>
                                    <li className="top-email"><Link to="mailto:anna.gushchina@arslex.com">anna.gushchina@arslex.com</Link></li>
                                    <li className="top-email"><Link to="mailto:kirill.zaycev@arslex.com">kirill.zaycev@arslex.com</Link></li>
                                    <li className="top-adres">Address: Markou Drakou, 93 Mesa Geitonia, 4002, Limassol, Cyprus</li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-wrapper">
                            <div className="header">
                                <div className="logo"><Link to="/"><img src={Logo} alt=" "/></Link></div>
                                <ul className="topmenu">
                                    <li className="goto"><Link className="link1" to="#link1">Home</Link></li>
                                    <li className="goto"><Link className="link2" to="#link2">About</Link></li>
                                    <li className="goto"><Link className="link3" to="#link3">Services</Link></li>
                                    <li className="goto"><Link className="sendpage" to="#sendpage">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="toptext">
                            <p className="welcome-text">Welcome to</p>
                            <h1>Ars Lex Limited</h1>
                            <p>Legal Advisory</p>
                            <div className="toptext-button">
                            <p className="goto"><Link className="sendpage" to="#sendpage">Contact now</Link></p>

                            </div>
                            <div className="toptext-desc">
                                <p>Ars Lex Limited is a Company duly incorporated under the Companies Law, Cap. 113 as a Limited Liability Company of Republic of Cyprus on 2 nd of April, 2019 under the number HE 396114, with registered address at: Markou Drakou, 93 Mesa Geitonia, 4002, Limassol, Cyprus. For more information, please refer to Legal directory on the web-site.<br />
                                <PDF/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutus-wrapper" id="link2">
                        <div className="aboutus">
                            <div className="aboutus-left">
                                <h2>About us</h2>
                                <p>Our team is a unity of enthusiasts, like-minded professionals, dedicated collaborative community of several multilingual nationalities which enable us to better understand the needs of our clients worldwide. Such diversity facilitates our solutions to address our clients’ most imperative issues across an extensive sphere of corporate advisory and legal assistance services. We able provide our services on Multilanguage basis, which includes: English, Greek, Polish and Russian.</p>
                                <p>Our main specialists are Anna Gushchina and Kirill Zaycev - both graduates of Immanuel Kant Baltic Federal University, who have the extended experience in legal, advisory, administrative and banking sphere. Both experienced lawyers, these two professionals are able to understand your business and implement innovative solutions in the area of your needs. Their depth of specialization is combined with breadth of experience and a keen commercial focus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-wrapper" id="link3">
                        <div className="services">
                            <h2>Services information:</h2>
                            <p>Ars Lex Limited is a broad new Company providing legal advisory, companies formation and administrative services. We hold the focus on Cyprus, Mauritius and Saint Vincent &amp; The Grenadines, as these jurisdictions the most favourable and perspective to run the business at, yet we always go forward and ready to serve our clients worldwide. We are new team of professionals, but with a vast experience background. We are motivated, ambitious and ready to provide our services to surpass our Clients expectations. Such services include:</p>
                            <div className="service-single">
                                <h3>Document review</h3>
                                <p>We can review your existing documents to advise you on the areas of special concern or specific rights and obligations.</p>
                            </div>
                            <div className="service-blocks">
                                <div className="service-block">
                                    <div className="h3">Company formation</div>
                                    <ul>
                                        <li>Full process of companies’ registration in a various jurisdictions worldwide</li>
                                        <li>Entity Formation &amp; Management</li>
                                        <li>Expert advice on business operations, contracting &amp; compliance</li>
                                        <li>Business Administration, secretary services</li>
                                    </ul>
                                </div>
                                <div className="service-block">
                                    <div className="h3">Regulatory law advisory</div>
                                    <ul>
                                        <li>Licensing and Permitting consultation</li>
                                        <li>Legislation overview</li>
                                        <li>Ongoing Compliance Advisory</li>
                                    </ul>
                                </div>
                                <div className="service-block">
                                    <div className="h3">COMPLIANCE</div>
                                    <ul>
                                        <li>Compliance review, advice</li>
                                        <li>Internal Compliance Program Build Out</li>
                                        <li>Manuals/guidelines prepare (AML, books etc.)</li>
                                        <li>reports assistance</li>
                                        <li>annual reports assistance</li>
                                    </ul>
                                </div>
                                <div className="service-block">
                                    <div className="h3">TRADEMARK LAW</div>
                                    <ul>
                                        <li>Registration</li>
                                        <li>Compliance routine</li>
                                    </ul>
                                </div>
                                <div className="service-block">
                                    <div className="h3">BUSINESS ADVISORY</div>
                                    <ul>
                                        <li>Mediation for Managers and Board Members</li>
                                        <li>Settlement of Contested Control Issues</li>
                                    </ul>
                                </div>
                                <div className="service-block">
                                    <div className="h3">DUE DILIGENCE</div>
                                    <ul>
                                        <li>Examination of Corporate Documents</li>
                                        <li>Advisory on Business Purchase and Investment</li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </div>

                        </div>
                    </div>
                    <div className="stories-wrapper">
                        <div className="stories">
                            <div className="story">
                                <div className="l-story">
                                    <img src={Cyprus} alt=" "/>
                                </div>
                                <div className="r-story">
                                    <h2>CYPRUS</h2>
                                    <p>By far pearl in financial ocean Republic of Cyprus fully recognized by the world business and financial community, as the most prominent, trust-worthy, tough-regulated and transparent jurisdiction to start business at. Being the member of European Union, The Republic of Cyprus built an excellent mechanism of financial system activity, where the synergy of her law and supervising system became synomim of well-coordinated work. Simplicity, reliability, predictability is one of a numerous advantages of this jurisdiction.</p>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="story">
                                <div className="l-story">
                                    <img src={Saint} alt=" "/>
                                </div>
                                <div className="r-story">
                                    <h2>SAINT VINCENT &amp; THE GRENADINES</h2>
                                    <p>A former British Crown Colony, is one of a few countries in the world with general financial privacy laws, which are aimed at protecting against disclosure of confidential information to any other jurisdiction in the world, which endears many business participants worldwide. Apart from this Saint Vincent &amp; the Grenadines has an open economy. The government has been successfully working toward diversifying an economy and now it became very perspective in financial and banking sector. A well-growing economy has given a big stimulus to its law system and financial sector regulatory enhancement. Being an active member in various international organizations such as World Trade Organization, the International Monetary Fund, and the World Bank, as well as being a member of several regional organizations. Having the strong economic ties with the United States, Canada, China, members of the European Union and rest of the countries of the Eastern Caribbean, this jurisdiction has a great potential for a long time ahead.</p>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="story">
                                <div className="l-story">
                                    <img src={Mauritius} alt=" "/>
                                </div>
                                <div className="r-story">
                                    <h2>MAURITIUS</h2>
                                    <p>Being one of the most developed countries in Africa, thanks to its free market policies and attractive tax regime, Mauritius is jurisdiction full of advantages and economic benefits, such as: impressive track record, political stability and more than 3 decades of sustained economic growth. Needless to say that Mauritius is secure investment location with established rule of law, resulting this country is the freest and most business-friendly country in Africa. Peaceful, multi-ethnic with a unique lifestyle in a blend of cultures, flexible, bilingual (English/French) and skilled workforce is a decent argument to consider this country to do business at. Strong law basis made this region Investment-friendly and open to foreign investors, talents and business enthusiasts. And a pleasant addition to the above is preferential market access to Africa, Europe and the USA, State-of-the-art infrastructure and Convenient time zone (GMT +4).</p>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <Form />
                    <div className="upfooter-wrapper">
                        <div className="upfooter">
                            <p><strong>Legal information:</strong> The information provided on the Ars Lex website is offered purely for informational purposes. The information be found on this website is intended to provide you with information on current topics of general legal, business, or legal advisory services. If you need legal advice, you should seek the advice of a licensed attorney. Nothing on this website is intended to create, offer, or promote an attorney-client relationship. An attorney-client relationship with any attorney at the firm can only be formed through a written fee agreement signed by you and a partner of the firm. Please note, the information be found on this website do not constitute a guarantee, warranty, or prediction of the outcome of your legal matter.</p>
                        </div>
                    </div>
                    <div className="footer-wrapper">
                        <div className="footer">
                            <ul>
                                <li className="top-adres">Address: Markou Drakou, 93 Mesa Geitonia, 4002, Limassol, Cyprus</li>
                                <li className="top-email"><Link to="mailto:kirill.zaycev@arslex.com">kirill.zaycev@arslex.com</Link></li>
                                <li className="top-email"><Link to="mailto:anna.gushchina@arslex.com">anna.gushchina@arslex.com</Link></li>
                                <li className="top-phone">+357 99 744249</li>
                            </ul>
                            <div className="copy">© 2019-2020 Ars Lex Limited</div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
          </>
      )
    }
}





export default Basic
