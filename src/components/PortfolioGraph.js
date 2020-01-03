import React from 'react'
import * as d3 from 'd3'

const dataReturn = [{name: 'xxa', price: 120}, {name: 'xxb', price: 110}, {name: 'xxc', price: 150}, {name: 'xxd', price: 180}, {name: 'xxe', price:150}, {name: 'xxf', price: 170}, {name: 'xxg', price: 109}, {name: 'xxh', price:190 },  {name: 'xxi', price: 107}, {name: 'xxj', price: 105},]

const drawBars = (dataset, ref) => {
  const initialAnimDelay = 300
  const secDur = 1000
  const secIndividualdelay = 150
  const data = dataset.sort((a,b) => d3.ascending(a.price, b.price))
  const timing = []; 
  dataset.forEach(item => {
    timing.unshift(item)
  })

  const margin = {
    top: 15,
    right: 60,
    bottom: 15,
    left: 60
  }

  const { offsetWidth: width, offsetHeight: height } = ref
  console.log({ ref, width, height })
  // const width = 500
  // const height = 700
  const colors = d3.scale.linear()
    .domain([0, dataset.length])
    .range(["purple", "red"])

  const svg = d3.select(ref).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .call(addResponsive)
    // .attr('viewBox', '0 0 ' + width + ' ' + height)
    // .attr('preserveAspectRatio', 'xMinYMin meet')
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let max = d3.max(dataset, d => d.price)

  let x = d3.scale.linear()
    .domain([0, max + 20])
    .range([0, width])

  let y = d3.scale.ordinal()
    .domain(data.map(d => d.name))
    .rangeRoundBands([height, 0], 0.2);

  let yAxis = d3.svg.axis()
    .scale(y)
    .tickSize(0)
    .orient("left");

  let gy = svg.append("g")
    .attr("class", "y-axis")
    .call(yAxis)

  let bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("g")

  bars.append("rect")
    .attr("class", "bar")
    .attr("y", d => y(d.name))
    .attr("height", y.rangeBand())
    .attr("x", 0)
    .attr("fill", (d,i) => colors(i))
    .attr("width", 0)
    .transition()
    .delay((d,i) => {
      let elementPos = timing.map((x) => x.name).indexOf(d.name)
      return elementPos * secIndividualdelay
    })
    .duration(secDur)
    .attr("width", d => x(d.price))

  bars.append("text")
    .attr("class", "label")
    .attr("y", d => y(d.name) + y.rangeBand() / 2)
    .attr("x", d => x(d.price) + 10)
    .attr("fill", "#fff")
    .attr()
    .text(d => '$' + d.price)
    .attr("opacity", 0)
    .transition()
    .delay((d, i) => {
      let elementPos = timing.map((x) => x.name).indexOf(d.name);
      elementPos += 1
      return elementPos * secIndividualdelay + 1000
    })
    .duration((d, i) => i * secIndividualdelay)
    .attr("opacity", 1)
}

function addResponsive(svg) {
  const container = d3.select(svg.node().parentNode)
  const width = parseInt(svg.style('width'), 10)
  const height = parseInt(svg.style('height'), 10)
  const aspect = width / height
  svg.attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .call(resize);
  d3.select(window).on(
    'resize.' + container.attr('id'),
    resize
  );
  function resize() {
    const w = parseInt(container.style('width'));
    svg.attr('width', w);
    svg.attr('height', Math.round(w / aspect));
  }
}

const PortfolioGraph = () => {
  const graphRef = React.createRef()

  React.useEffect(() => {
    if (graphRef.current) drawBars(dataReturn, graphRef.current)
  }, [graphRef.current])

  return <div>PortfolioGraph
    <div ref={graphRef} />
  </div>
}

export default PortfolioGraph
