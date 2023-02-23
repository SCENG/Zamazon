import React from 'react'
import { images } from '../../constants'
import './Newsletter.css'

const Newslater = () => {

    // modal elements
    const modal = document.querySelector('[data-modal]');
    const modal_CloseBtn = document.querySelector('[data-modal-close]');
    const modal_CloseOverlay = document.querySelector('[data-modal-overlay]');

    // modal close function
    const modalCloseFunc = function () { modal.classList.add('closed') }

    // modal eventListener
    modal_CloseOverlay.addEventListener('click', modalCloseFunc);
    modal_CloseBtn.addEventListener('click', modalCloseFunc);

  return (
    
    <div>
        <div class="overlay" data-overlay></div>

        <div class="modal" data-modal>

            <div class="modal-close-overlay" data-modal-overlay></div>

            <div class="modal-content">

                <button class="modal-close-btn" data-modal-close>
                <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="newsletter-img">
                    <img src={images.newslettar} alt="subscribe newsletter" width="400" height="400"/>
                </div>

                <div class="newsletter">
                    <form action="#">
                        <div class="newsletter-header">

                            <h3 class="newsletter-title">Subscribe Newsletter.</h3>
                            <p class="newsletter-desc">
                            Subscribe the <b>Zamazon</b> to get latest products and discount update.
                            </p>

                        </div>
                        <input type="email" name="email" class="email-field" placeholder="Email Address" required/>
                        <button type="submit" class="btn-newsletter">Subscribe</button>
                    </form>

                </div>

            </div>

        </div>
    </div>

    
    
  )
}

export default Newslater