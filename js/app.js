/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
    const navList = document.getElementById('navbar__list');
    const navLinks = document.getElementsByClassName('menu__link')
    const body = document.getElementById('body')
    const sectionNum = 4;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//***** **********   ********* ****   ************ **********   *** ****   ******* ***   ***** ************   ***********************************************************
//***** **********   ********* ****   ************ **********   *** ****   ***** ***   ******* ************   **********************************************************
//******** ****   ************ ****   *************** ****   ****** ****   *** ***   ********* ****   *****************************************************************
//******** ****   ************ ****   *************** ****   ****** ****   * ***   *********** ****   ******************************************************************
//******** ****   ************ ****   *************** ****   ****** ****   ***   ************* ************   ************************************************************
//******** ****   ************ ****   *************** ****   ****** **** *** ***   *********** ************   **************************************************************
//******** ****   ************ ****   *************** ****   ****** **** *  ** ***   ********* ****   **********************************************************************
//******** ****   ************ ****   *************** ****   ****** ****   ***** ***   ******* ****   *********************************************************************
//***** **********   ********* *************   *** **********   *** ****   ******* ***   ***** ************   ************************************************************
//***** **********   ********* *************   *** **********   *** ****   ********* ***   *** ************   ***********************************************************


//***** ****    * ****   *** ********  ***************** *   **************** ****   ****** **********   *** ****************   *** ****   ************** ****   ************
//***** ****    * ****   *** **********   ************* ***   ************* ********   **** **********   *** ****************   ***** ****   ********** ****   *************
//***** ****    * ****   *** ****    ****   ********** *****   ********** ****    ***   ****** ****   ************ ****   ************* ****   ****** ****   **************
//***** ****    * ****   *** ****    ****   ********* *** ***   ********* **** *************** ****   ************ ****   *************** ****   ** ****   ***************
//***** ****    * ****   *** ****    ****   ******** ***   ***   ******** **** *************** ****   ************ ****   ***************** ****  ****   ******************
//***** ****    * ****   *** ****    ****   ******* ***   * ***   ******* **** *************** ****   ************ ****   ****************** *******  **********************
//***** ****    * ****   *** ****    ****   ****** *** ***** ***   ****** **** *************** ****   ************ ****   ***************** *****   **********************
//***** ****    * ****   *** ****    ****   ***** *** ******* ***   ***** ****    ***   ****** ****   ************ ****   **************** ****   **********************
//******* **** * ***   ***** **********   ****** ***   ******* ***   ****** ********   ***** *********   ********* ****   *************** *****  *********************
//********* ******   ******* ********   ******* ***   ********* ***   ******* ****   ******* *********   ********* ****   ************ *********   *****************



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

    function createNavLinks(){
        for (let i = 0; i < sectionNum; i++) {

            // creating new elements to append

            let li = document.createElement('li');
            let a = document.createElement('a');
            let content = document.createTextNode(`Section ${i+1}`);

            // adding classes to created elements

            li.classList.add('menu__link');

            // Scroll to anchor ID using scrollTO event

            a.setAttribute('href', `#section${i+1}`);

            // appending elements   UL > A > LI

            li.appendChild(content);
            a.appendChild(li);
            navList.appendChild(a);
        }
    }
    createNavLinks();

/**
 * End Main Functions
 * Begin Events
 * 
*/
    // event to scroll top for 100 
    document.addEventListener('click', ()=>{
        body.scrollTop += 100;
    })

    // adding event to navLinks to show active sections with active__section class

    for (let j = 0; j < sectionNum; j++) {
        navLinks[j].addEventListener('click', ()=>{
            const el = document.getElementById(`section${j+1}`);
            for (let n = 0; n < sectionNum; n++) {
                document.getElementById(`section${n+1}`).classList.remove('active__section');
            }
            el.classList.add('active__section');
        })
    }





