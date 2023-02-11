import "./style.scss";
import {FiArrowRightCircle} from "react-icons/fi";
const LandingPage = ({setShowForm, setCurrentForm}:any) => {
	return (
		<>
			<section className='hero'>
				<h1>
					Pitch Your Problem Repository
				</h1>
				<h2>
					Submit your problems and get innovative ideas for your problems
				</h2>
			</section>
			<section className='section'>
				<div className='wrapper'>
					<h2 className='section__title'>SOME TITLE</h2>
					<p className='section__intro'>
						Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Maecenas faucibus mollis interdum. Curabitur blandit tempus
						porttitor.
					</p>
					<div className='box__grid'>
						{['Govt Department', "MEMS's", 'Corporates', 'Large Scale Industries'].map((item) => {
							return (
								<article className='box'>
									<a className='box__content' href='#'>
										<h3 className='box__title pb-2 font-bold'>{item}</h3>
										<i className='fa fa-mobile fa-3x'></i>
										<p>
											Duis neque leo cursus ac libero ac imperdiet
											bibendum nisl mauris neque diam vulputate nem.
										</p>
										<span className='box__more flex items-center pt-6 justify-center'
										      onClick={()=>{
												setCurrentForm(item)
												setShowForm(true)
											  }}>
											<FiArrowRightCircle className="text-2xl ml-3 mt-2" />
										</span>
									</a>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
