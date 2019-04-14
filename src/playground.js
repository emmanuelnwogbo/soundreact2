import React from 'react';

document.querySelector('body').onload = function() {
  const img = new Image();
  img.src = 'https://images.unsplash.com/photo-1553531580-54bcdf7bc851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80';
  img.onload = function() {
    document.querySelector('#test')
    .style['background-image'] = `url(${img.src})`
  }
}

const test = () => {
  return (
    <div>
    <div style={{
        width: '40rem',
        height: '40rem',
        background: 'red',
        backgroundSize: '100%',
        margin: '0 auto',
        zIndex: '9900',
        transform: 'translateY(25rem)'
      }} id="test">
    </div>
    </div>
  )
}
