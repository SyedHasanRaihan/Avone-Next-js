import React, {useState} from 'react';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
	window.addEventListener('scroll', toggleVisible);
};


return (
	<button className='z-100 bg-[#47352B] fixed bottom-20 right-20' onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} >
	<img src='/assets/images/svg/arrowUp.svg' alt='' />
	</button>
);
}

export default ScrollButton;
