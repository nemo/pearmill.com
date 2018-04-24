import React, { Component } from 'react'
import sections from '../../styles/sections'
import grid from '../../styles/grid'
import caseStudies from '../../styles/caseStudies'

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }

let examples = [
  {
    type: 'image',
    src: '/static/case-studies/cover/cover-1.png'
  },
  {
    type: 'image',
    src: '/static/case-studies/cover/cover-2.png'
  },
  {
    type: 'image',
    src: '/static/case-studies/cover/cover-3.png'
  },
  {
    type: 'image',
    src: '/static/case-studies/cover/cover-4.png'
  },
  {
    type: 'image',
    src: '/static/case-studies/triple-byte/triple-byte-1.png'
  },
  {
    type: 'image',
    src: '/static/case-studies/triple-byte/triple-byte-3.png'
  },
  {
    type: 'image',
    src: '/static/case-studies/triple-byte/triple-byte-4.png'
  },
  {
    type: 'image',
    src: '/static/case-studies/Aptible/Aptible-sample-1.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Aptible/Aptible-sample-2.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Aptible/Aptible-sample-3.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Aptible/Aptible-sample-4.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Aptible/Aptible-sample-5.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/AllBirds/Facebook 1200x628 Copy 35.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/AllBirds/Facebook 1200x628 Copy 36.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Cleanly/Facebook 1200x628 Copy 35.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Fabric/Facebook 1200x628 Copy 20.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Fabric/Facebook 1200x628 Copy 21.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Harvest Daily/HD - sample 1.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Harvest Daily/HD - sample 2.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Harvest Daily/HD - sample 3.jpg'
  },
  {
    type: 'image',
    src: '/static/case-studies/Harvest Daily/HD - sample 4.jpg'
  }
]

export default class CaseStudiesComponent extends Component {

  constructor (props) {
    super(props)

    this.state = {
      examples: examples
    }
  }

  componentWillMount () {
    this.startTimer();
  }

  componentWillUnMount () {
    clearTimeout(this._timer);
  }

  startTimer = () => {
    this._timer = setTimeout(() => {
      clearTimeout(this._timer);


      let newExamples = this.state.examples.slice()

      let sourceRandomIndex = Math.floor(Math.random() * examples.length)
      let randomIndex = Math.floor(Math.random() * 8);
      let isValid = true

      if (examples[sourceRandomIndex].src !== newExamples[randomIndex].src) {
        for (var index = 0; index < 8; index++) {
          if (newExamples[index].src === examples[sourceRandomIndex].src) {
            isValid = false
            break
          }
        }

        if (isValid) {
          newExamples[randomIndex] = examples[sourceRandomIndex];
        }
      }

      this.setState({
        examples: newExamples
      })

      this.startTimer();
    }, 2000);
  }

  render() {
    let exmps = this.state.examples.slice(0, 8)

    return (
      <section id='case-studies'>
        <div className='container'>
          <h2>High Quality, Performant Creative</h2>
          <h3 className='lead'>Our network of designers is incentivized to produce performant creative. Below is a small snapshot of creative that's been through over $20M of spend over the past year alone.</h3>
          <div className='grid'>
            <div className='col-7 grid'>
              {exmps.map((example, index) => (
                <div className='col-5 case-img-container' key={example.src}>
                  {example.type === 'image'
                  ? <img src={example.src} />
                  : <div></div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id='case-studies-clip'></div>
        <style jsx>{sections}</style>
        <style jsx>{grid}</style>
        <style jsx>{caseStudies}</style>
      </section>
    )
  }
}
