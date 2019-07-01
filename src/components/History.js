import React from 'react'
import More from './More'
import './style/History.scss'

const logoBar = require('../images/barLogo.png');

const History = () => {
    return (
        <div className="container history-component">

            <div className="row">
                <div className="col-md-12 history-title">
                    <span>Nuestra</span>
                    <h1>Historia</h1>
                </div>
                <img style={{ margin: "auto" }} src={logoBar} />
                <div className="history-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum urna est, eget interdum lorem porta posuere. Sed dui massa, bibendum eu nunc eu, mattis
fermentum massa. Vivamus auctor eros a ipsum facilisis, ut blandit libero tincidunt. Aliquam erat volutpat. Nulla nec erat sed tellus tincidunt tristique. Cras ut dictum
urna, nec posuere velit. Sed fermentum auctor lectus vitae tristique. Fusce vestibulum diam eros, in condimentum lectus rhoncus vulputate. In massa odio, consequat vel
turpis ut, dictum maximus diam.
Integer vel sollicitudin ipsum, sed mollis velit. Ut feugiat mauris eu felis luctus vulputate eget ut orci. Sed laoreet ultricies quam, et cursus mauris consequat non. Mauris
placerat mi et nisl dictum fringilla. Maecenas eu lorem a tellus scelerisque blandit sit amet a risus. Praesent cursus ipsum vitae magna vulputate, eu varius est tincidunt.
Suspendisse vehicula tincidunt nibh sit amet pulvinar.
Sed sit amet lorem ligula. In arcu nisl, auctor in nibh sed, fermentum tempus nibh. In ante ante, aliquam sit amet enim eu, accumsan gravida quam. Etiam mattis finibus
mauris ac consequat. Cras lectus dui, maximus nec dolor ut, porta pellentesque mi. Ut quis molestie neque, ac rutrum nibh. Fusce efficitur ligula sed orci ornare
pellentesque. Proin dignissim nunc malesuada leo tincidunt, ut semper massa semper.</p>
                </div>
                <More Link="/nuestra-historia" />
            </div>
        </div>
    );
}
export default History;