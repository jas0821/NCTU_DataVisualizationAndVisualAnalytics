(function (d3$1) {
  'use strict';

  const svg = d3$1.select('svg');
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const column = ['sepal length', 'sepal width', 'petal length', 'petal width'];

  const colorr = {
      'Iris-setosa': '#ff6969',
      'Iris-versicolor': '#ffd769',
      'Iris-virginica': '#69ffa7'
  };

  const render = data => {
    
    const margin = { top: 115, right: 250, bottom: 84, left: 120 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    const g = svg.append('g')
    	.attr('transform', `translate(${margin.left}, ${margin.top})`);

    const x = d3$1.scalePoint()
     	.domain(column)
     	.range([0, innerWidth]);
    
    const y = d3$1.scaleLinear()
      	.domain([0, 8])
      	.range([innerHeight, 0]);
    
    const axisY = d3$1.axisLeft().scale(y)
    	.tickPadding(5)
    	.tickSize(5);
    
    const createline = d => 
  		  d3$1.line()(column.map(p => [x(p), y(d[p])] ));
    
    //data
    const pathh = g.selectAll('path').data(data).enter()
    	.append('path')
    	.attr('d', d => createline(d))
    	.attr('stroke',  d => colorr[d.class])
    	.attr('fill', 'none')
    	.attr('opacity', 0.2)
    	.attr('stroke-width', 3);
    
    
    //line
    const axiss = g.selectAll('.axes').data(column).enter()
    	.append('g')
    		.attr('class', 'axes')
    		.each(function(d) { d3$1.select(this).call(axisY);})
    		.attr('transform', d => 'translate(' + x(d) +',0)')
    	.append('text')
    		.attr('fill','black')
    		.attr('transform', `translate(0,${innerHeight})`)
    		.attr('y', 30)
    		.attr('text-anchor', 'middle')
    		.attr('font-size', '2em')
    		.text(d => d);

    // class text
    g.append('text')
      .attr('class', 'title')
      .attr('x', innerWidth / 2 - 320)
      .attr('y', -40)
      .attr('font-size', '3em')
      .attr('font-family', 'sans-serif')
      .text('Iris Parallel Coordinate Plot');
    
    g.append('text')
        .attr('x', 620)
        .attr('y', 125)
        .attr('font-size', '1.5em')
      	.attr('font-family', 'sans-serif')
        .text('Classes');
      
    //setosa
    g.append('circle')
      			.attr('cx', 630)
        		.attr('cy', 145)
        		.attr('r', 5)
        		.style('fill', colorr['Iris-setosa']); 
    
    g.append('text')
      			.attr('x', 645)
        		.attr('y', 152.5)
        		.attr('font-size', '1.5em')
      			.attr('font-family', 'sans-serif')
        		.text('setosa');
      
    //versicolor
    g.append('circle')
      			.attr('cx', 630)
        		.attr('cy', 175)
        		.attr('r', 5)
        		.style('fill', colorr['Iris-versicolor']);
    
    g.append('text')
      			.attr('x', 645)
        		.attr('y', 182.5)
        		.attr('font-size', '1.5em')
      			.attr('font-family', 'sans-serif')
        		.text('versicolor');
      
    //virginica
    g.append('circle')
      			.attr('cx', 630)
        		.attr('cy', 205)
        		.attr('r', 5)
        		.style('fill', colorr['Iris-virginica']);
    
    g.append('text')
      			.attr('x', 645)
        		.attr('y', 212.5)
        		.attr('font-size', '1.5em')
      			.attr('font-family', 'sans-serif')
        		.text('virginica');


  };



  // Read Dataset
  d3.csv('https://raw.githubusercontent.com/harker2011/iris_test/main/iris.csv').then( data => {
   		data.forEach(d => {
      	d['sepal length'] = +d['sepal length'];
        d['sepal width'] = +d['sepal width'];
        d['petalLength'] = +d['petal length'];
        d['petalWidth'] = +d['petal width'];
      });
    render(data);
  });

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNzdixcbiAgc2VsZWN0LFxuICBzY2FsZUxpbmVhcixcbiAgc2NhbGVQb2ludCxcbiAgc2NhbGVPcmRpbmFsLFxuICBheGlzTGVmdCxcbiAgZXh0ZW50LFxuICBtYXAsXG4gIGxpbmUsXG4gIGtleXNcbn0gZnJvbSAnZDMnO1xuXG5jb25zdCBzdmcgPSBzZWxlY3QoJ3N2ZycpO1xuY29uc3Qgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyk7XG5jb25zdCBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG5jb25zdCBjb2x1bW4gPSBbJ3NlcGFsIGxlbmd0aCcsICdzZXBhbCB3aWR0aCcsICdwZXRhbCBsZW5ndGgnLCAncGV0YWwgd2lkdGgnXTtcblxuY29uc3QgY29sb3JyID0ge1xuICAgICdJcmlzLXNldG9zYSc6ICcjZmY2OTY5JyxcbiAgICAnSXJpcy12ZXJzaWNvbG9yJzogJyNmZmQ3NjknLFxuICAgICdJcmlzLXZpcmdpbmljYSc6ICcjNjlmZmE3J1xufTtcblxuY29uc3QgcmVuZGVyID0gZGF0YSA9PiB7XG4gIFxuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTE1LCByaWdodDogMjUwLCBib3R0b206IDg0LCBsZWZ0OiAxMjAgfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gIFxuICBjb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG4gIFx0LmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgY29uc3QgeCA9IHNjYWxlUG9pbnQoKVxuICAgXHQuZG9tYWluKGNvbHVtbilcbiAgIFx0LnJhbmdlKFswLCBpbm5lcldpZHRoXSk7XG4gIFxuICBjb25zdCB5ID0gc2NhbGVMaW5lYXIoKVxuICAgIFx0LmRvbWFpbihbMCwgOF0pXG4gICAgXHQucmFuZ2UoW2lubmVySGVpZ2h0LCAwXSk7XG4gIFxuICBjb25zdCBheGlzWSA9IGF4aXNMZWZ0KCkuc2NhbGUoeSlcbiAgXHQudGlja1BhZGRpbmcoNSlcbiAgXHQudGlja1NpemUoNSlcbiAgXG4gIGNvbnN0IGNyZWF0ZWxpbmUgPSBkID0+IFxuXHRcdCAgbGluZSgpKGNvbHVtbi5tYXAocCA9PiBbeChwKSwgeShkW3BdKV0gKSlcbiAgXG4gIC8vZGF0YVxuICBjb25zdCBwYXRoaCA9IGcuc2VsZWN0QWxsKCdwYXRoJykuZGF0YShkYXRhKS5lbnRlcigpXG4gIFx0LmFwcGVuZCgncGF0aCcpXG4gIFx0LmF0dHIoJ2QnLCBkID0+IGNyZWF0ZWxpbmUoZCkpXG4gIFx0LmF0dHIoJ3N0cm9rZScsICBkID0+IGNvbG9ycltkLmNsYXNzXSlcbiAgXHQuYXR0cignZmlsbCcsICdub25lJylcbiAgXHQuYXR0cignb3BhY2l0eScsIDAuMilcbiAgXHQuYXR0cignc3Ryb2tlLXdpZHRoJywgMyk7XG4gIFxuICBcbiAgLy9saW5lXG4gIGNvbnN0IGF4aXNzID0gZy5zZWxlY3RBbGwoJy5heGVzJykuZGF0YShjb2x1bW4pLmVudGVyKClcbiAgXHQuYXBwZW5kKCdnJylcbiAgXHRcdC5hdHRyKCdjbGFzcycsICdheGVzJylcbiAgXHRcdC5lYWNoKGZ1bmN0aW9uKGQpIHsgc2VsZWN0KHRoaXMpLmNhbGwoYXhpc1kpfSlcbiAgXHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+ICd0cmFuc2xhdGUoJyArIHgoZCkgKycsMCknKVxuICBcdC5hcHBlbmQoJ3RleHQnKVxuICBcdFx0LmF0dHIoJ2ZpbGwnLCdibGFjaycpXG4gIFx0XHQuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aW5uZXJIZWlnaHR9KWApXG4gIFx0XHQuYXR0cigneScsIDMwKVxuICBcdFx0LmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gIFx0XHQuYXR0cignZm9udC1zaXplJywgJzJlbScpXG4gIFx0XHQudGV4dChkID0+IGQpO1xuXG4gIC8vIGNsYXNzIHRleHRcbiAgZy5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCdjbGFzcycsICd0aXRsZScpXG4gICAgLmF0dHIoJ3gnLCBpbm5lcldpZHRoIC8gMiAtIDMyMClcbiAgICAuYXR0cigneScsIC00MClcbiAgICAuYXR0cignZm9udC1zaXplJywgJzNlbScpXG4gICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ3NhbnMtc2VyaWYnKVxuICAgIC50ZXh0KCdJcmlzIFBhcmFsbGVsIENvb3JkaW5hdGUgUGxvdCcpO1xuICBcbiAgZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCA2MjApXG4gICAgICAuYXR0cigneScsIDEyNSlcbiAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnMS41ZW0nKVxuICAgIFx0LmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ3NhbnMtc2VyaWYnKVxuICAgICAgLnRleHQoJ0NsYXNzZXMnKTtcbiAgICBcbiAgLy9zZXRvc2FcbiAgZy5hcHBlbmQoJ2NpcmNsZScpXG4gICAgXHRcdFx0LmF0dHIoJ2N4JywgNjMwKVxuICAgICAgXHRcdC5hdHRyKCdjeScsIDE0NSlcbiAgICAgIFx0XHQuYXR0cigncicsIDUpXG4gICAgICBcdFx0LnN0eWxlKCdmaWxsJywgY29sb3JyWydJcmlzLXNldG9zYSddKTsgXG4gIFxuICBnLmFwcGVuZCgndGV4dCcpXG4gICAgXHRcdFx0LmF0dHIoJ3gnLCA2NDUpXG4gICAgICBcdFx0LmF0dHIoJ3knLCAxNTIuNSlcbiAgICAgIFx0XHQuYXR0cignZm9udC1zaXplJywgJzEuNWVtJylcbiAgICBcdFx0XHQuYXR0cignZm9udC1mYW1pbHknLCAnc2Fucy1zZXJpZicpXG4gICAgICBcdFx0LnRleHQoJ3NldG9zYScpO1xuICAgIFxuICAvL3ZlcnNpY29sb3JcbiAgZy5hcHBlbmQoJ2NpcmNsZScpXG4gICAgXHRcdFx0LmF0dHIoJ2N4JywgNjMwKVxuICAgICAgXHRcdC5hdHRyKCdjeScsIDE3NSlcbiAgICAgIFx0XHQuYXR0cigncicsIDUpXG4gICAgICBcdFx0LnN0eWxlKCdmaWxsJywgY29sb3JyWydJcmlzLXZlcnNpY29sb3InXSk7XG4gIFxuICBnLmFwcGVuZCgndGV4dCcpXG4gICAgXHRcdFx0LmF0dHIoJ3gnLCA2NDUpXG4gICAgICBcdFx0LmF0dHIoJ3knLCAxODIuNSlcbiAgICAgIFx0XHQuYXR0cignZm9udC1zaXplJywgJzEuNWVtJylcbiAgICBcdFx0XHQuYXR0cignZm9udC1mYW1pbHknLCAnc2Fucy1zZXJpZicpXG4gICAgICBcdFx0LnRleHQoJ3ZlcnNpY29sb3InKTtcbiAgICBcbiAgLy92aXJnaW5pY2FcbiAgZy5hcHBlbmQoJ2NpcmNsZScpXG4gICAgXHRcdFx0LmF0dHIoJ2N4JywgNjMwKVxuICAgICAgXHRcdC5hdHRyKCdjeScsIDIwNSlcbiAgICAgIFx0XHQuYXR0cigncicsIDUpXG4gICAgICBcdFx0LnN0eWxlKCdmaWxsJywgY29sb3JyWydJcmlzLXZpcmdpbmljYSddKTtcbiAgXG4gIGcuYXBwZW5kKCd0ZXh0JylcbiAgICBcdFx0XHQuYXR0cigneCcsIDY0NSlcbiAgICAgIFx0XHQuYXR0cigneScsIDIxMi41KVxuICAgICAgXHRcdC5hdHRyKCdmb250LXNpemUnLCAnMS41ZW0nKVxuICAgIFx0XHRcdC5hdHRyKCdmb250LWZhbWlseScsICdzYW5zLXNlcmlmJylcbiAgICAgIFx0XHQudGV4dCgndmlyZ2luaWNhJyk7XG5cblxufTtcblxuXG5cbi8vIFJlYWQgRGF0YXNldFxuZDMuY3N2KCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaGFya2VyMjAxMS9pcmlzX3Rlc3QvbWFpbi9pcmlzLmNzdicpLnRoZW4oIGRhdGEgPT4ge1xuIFx0XHRkYXRhLmZvckVhY2goZCA9PiB7XG4gICAgXHRkWydzZXBhbCBsZW5ndGgnXSA9ICtkWydzZXBhbCBsZW5ndGgnXTtcbiAgICAgIGRbJ3NlcGFsIHdpZHRoJ10gPSArZFsnc2VwYWwgd2lkdGgnXTtcbiAgICAgIGRbJ3BldGFsTGVuZ3RoJ10gPSArZFsncGV0YWwgbGVuZ3RoJ107XG4gICAgICBkWydwZXRhbFdpZHRoJ10gPSArZFsncGV0YWwgd2lkdGgnXTtcbiAgICB9KTtcbiAgcmVuZGVyKGRhdGEpO1xufSk7XG5cbiJdLCJuYW1lcyI6WyJzZWxlY3QiLCJzY2FsZVBvaW50Iiwic2NhbGVMaW5lYXIiLCJheGlzTGVmdCIsImxpbmUiXSwibWFwcGluZ3MiOiI7OztFQWFBLE1BQU0sR0FBRyxHQUFHQSxXQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDMUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ2pDLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuQztFQUNBLE1BQU0sTUFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDOUU7RUFDQSxNQUFNLE1BQU0sR0FBRztFQUNmLElBQUksYUFBYSxFQUFFLFNBQVM7RUFDNUIsSUFBSSxpQkFBaUIsRUFBRSxTQUFTO0VBQ2hDLElBQUksZ0JBQWdCLEVBQUUsU0FBUztFQUMvQixDQUFDLENBQUM7QUFDRjtFQUNBLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSTtFQUN2QjtFQUNBLEVBQUUsTUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7RUFDakUsRUFBRSxNQUFNLFVBQVUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQ3hELEVBQUUsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLE1B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