import { Button, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { select, line, curveCardinal } from "d3";
import Weather from './Weather';
import Weathermxmi from './Weathermxmi';


const Cloud = () => {

    const [data, setData] = useState([0, 60, 0, 80, 0, 40, 0, 110, 50, 0, 70, 0, 60, 50]);
    const svgRef = useRef();
    const dataLength = data.length;

    useEffect(() => {
        const svg = select(svgRef.current);
        const myLine = line()
            .x((value, index) => index * 87)
            .y(value => 120 - value)
            .curve(curveCardinal);
        svg
            .selectAll("path")
            .data([data])
            .join("path")
            .attr("d", value => myLine(value))
            .attr("fill", "none")
            .attr("stroke", "rgba(245, 245, 245, 0.829)")
        svg.attr("width", dataLength * 79)
        svg.attr("height", 150);
    }, [data]);


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6 text-center">
                        <div className='bordr'>
                            <SearchIcon style={{
                                position: "absolute",
                                top: "20",
                                left: "290"
                            }} />
                            <TextField
                                id="standard-basic"
                                label="City"
                                variant="standard"
                                style={{ width: "30ch" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-6">

                        <p className='text-footer'>
                            NATIONAL
                            <br />
                            WEATHER
                        </p>
                        <p className='text-cntr'>
                            Weather Forcast
                        </p>
                        <p className='text-centr'>
                            Storm
                            <br />
                            with Heavy Rain
                        </p>

                        <p>
                            USA Fridy
                        </p>

                        <Button
                            sx={{
                                borderRadius: '16px',
                                color: "white",
                                backgroundColor: "rgba(49, 47, 47, 0.705)"
                            }}
                            style={{ marginTop: "30px" }}
                        >
                            SEE DETAILS
                        </Button>

                        {/* <div class="flex-container text-center">
                            <div>
                                <p className='higherlow'>
                                    high
                                    <br />
                                    low
                                </p>
                            </div> 
                            <div>
                            </div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                        <div>7</div> 
                        </div>*/}

                        <Weathermxmi />

                        <svg ref={svgRef}></svg>


                        <Weather />


                    </div>
                </div>
            </div>
        </>
    );
}

export default Cloud;
