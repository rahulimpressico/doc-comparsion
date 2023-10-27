import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tabs.css";
import { NavBar } from "../components/navbar";

export const Tab2 = () => {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/docs", {
          headers: {
            "Cache-Control": "no-cache",
            Accept: "*/*",
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <div className="row" style={{ marginTop: "-2%" }}>
          <div className="text-start">
            {" "}
            <h2 className="text-start fs-bold" style={{ color: "#002D62" }}>
              Comparsion Report{" "}
            </h2>
          </div>
        </div>

        <div className="row">
          {data && (
            <>
              <div className="col-md-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onClick={(e) => {
                    setFile1(e.target.value);
                  }}
                >
                  <option value="">Select your file</option>
                  {Object.entries(data).map(([property, value]) => (
                    <option key={property} value={property}>
                      {property}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {data && (
            <>
              <div className="col-md-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onClick={(e) => {
                    setFile2(e.target.value);
                  }}
                >
                  <option value="">Select your file</option>
                  {Object.entries(data).map(([property, value]) => (
                    <option key={property} value={property}>
                      {property}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>
        {file1 && file2 && (
          <>
            <div className="row mt-2 mb-2">
              <div className="float-center">
                <button type="button" class="btn btn-success">
                  Comparsion
                </button>
              </div>
            </div>
          </>
        )}

        <div
          className="row"
          style={{ marginTop: file1 && file2 ? "5px" : "20px" }}
        >
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <table className="table text-center" border="" summary="Colors">
              <tr>
                <td className="diff_add">Added</td>
                <td className="diff_chg">Changed</td>
                <td className="diff_sub">Deleted</td>
              </tr>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
              border: "0",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              height: "auto",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <div className="row">
              <div
                style={{
                  overflow: "scroll",
                  whiteSpace: "nowrap",
                  padding: "1%",
                  width: "100%",
                }}
              >
                <table className="tabel-responsive diff ">
                  <thead>
                    <tr>
                      <th class="diff_next">
                        <br />
                      </th>
                      <th colspan="2" class="diff_header">
                        analysis_results.txt
                      </th>
                      <th class="diff_next">
                        <br />
                      </th>
                      <th colspan="2" class="diff_header">
                        analysis_resultscopy.txt
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__0">
                        <a href="#difflib_chg_to0__1">n</a>
                      </td>
                      <td class="diff_header" id="from0_1">
                        1
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          &nbsp;___&nbsp;___&nbsp;___&nbsp;___&nbsp;__&nbsp;___&nbsp;___&nbsp;___&nbsp;___&nbsp;TABLE&nbsp;OF&nbsp;CONTENTS&nbsp;§1.&nbsp;Subject&nbsp;of&nbsp;the&nbsp;Lease&nbsp;_______&nbsp;__&nbsp;
                        </span>
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__1">n</a>
                      </td>
                      <td class="diff_header" id="to0_1">
                        1
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          &nbsp;§1.&nbsp;§2.&nbsp;§3.&nbsp;84.&nbsp;§5&nbsp;86.&nbsp;87.&nbsp;§8.&nbsp;89.&nbsp;TABLE&nbsp;OF&nbsp;CONTENTS&nbsp;___&nbsp;Subject&nbsp;of&nbsp;the&nbsp;Lease&nbsp;Fit-out&nbsp;of&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_2">
                        2
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          ___&nbsp;_______&nbsp;3&nbsp;§2.&nbsp;Fit-out&nbsp;of&nbsp;the&nbsp;Premise&nbsp;5&nbsp;§3.&nbsp;Commencement&nbsp;and&nbsp;Period&nbsp;of&nbsp;Lease&nbsp;6&nbsp;§4.&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_2">
                        2
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          the&nbsp;Premise&nbsp;3&nbsp;___&nbsp;_______&nbsp;__&nbsp;___&nbsp;_______&nbsp;5&nbsp;___&nbsp;Commencement&nbsp;and&nbsp;Period&nbsp;of&nbsp;Lease&nbsp;6&nbsp;___&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_3">
                        3
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          Termination&nbsp;10&nbsp;§5&nbsp;Rent&nbsp;12&nbsp;§6.&nbsp;Service&nbsp;Agreement&nbsp;14&nbsp;§7.&nbsp;Payments&nbsp;14&nbsp;§8.&nbsp;Other&nbsp;obligations&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_3">
                        3
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          Termination&nbsp;__&nbsp;__&nbsp;Rent&nbsp;__&nbsp;___&nbsp;Service&nbsp;Agreement&nbsp;__&nbsp;___&nbsp;Payments&nbsp;__&nbsp;___&nbsp;Other&nbsp;obligations&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_4">
                        4
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Parties&nbsp;
                        <span class="diff_chg">16&nbsp;§9.</span>
                        &nbsp;Use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;Keys,&nbsp;Subletting,&nbsp;Assignment&nbsp;
                        <span class="diff_chg">21</span>&nbsp;§10.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_4">
                        4
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Parties&nbsp;
                        <span class="diff_chg">__&nbsp;___</span>
                        &nbsp;Use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;Keys,&nbsp;Subletting,&nbsp;Assignment&nbsp;
                        <span class="diff_chg">__</span>&nbsp;§10.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_5">
                        5
                      </td>
                      <td nowrap="nowrap">
                        Maintenance,&nbsp;Repair&nbsp;and&nbsp;Alteration&nbsp;of&nbsp;the&nbsp;Premises&nbsp;by&nbsp;Tenant&nbsp;
                        <span class="diff_chg">22</span>
                        &nbsp;§11.&nbsp;Repairs&nbsp;and&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_5">
                        5
                      </td>
                      <td nowrap="nowrap">
                        Maintenance,&nbsp;Repair&nbsp;and&nbsp;Alteration&nbsp;of&nbsp;the&nbsp;Premises&nbsp;by&nbsp;Tenant&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;§11.&nbsp;Repairs&nbsp;and&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_6">
                        6
                      </td>
                      <td nowrap="nowrap">
                        Structural&nbsp;Alterations&nbsp;in&nbsp;the&nbsp;Premises&nbsp;and&nbsp;Building&nbsp;by&nbsp;Landlord&nbsp;
                        <span class="diff_chg">24</span>
                        &nbsp;§12.&nbsp;Access&nbsp;to&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_6">
                        6
                      </td>
                      <td nowrap="nowrap">
                        Structural&nbsp;Alterations&nbsp;in&nbsp;the&nbsp;Premises&nbsp;and&nbsp;Building&nbsp;by&nbsp;Landlord&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;§12.&nbsp;Access&nbsp;to&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_7">
                        7
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;<span class="diff_chg">25</span>
                        &nbsp;§13.&nbsp;Advertisements&nbsp;
                        <span class="diff_chg">26</span>
                        &nbsp;§14.&nbsp;Governing&nbsp;Law&nbsp;and&nbsp;Arbitration&nbsp;
                        <span class="diff_chg">33</span>
                        &nbsp;§15.&nbsp;Final&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_7">
                        7
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;<span class="diff_chg">__</span>
                        &nbsp;§13.&nbsp;Advertisements&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;§14.&nbsp;Governing&nbsp;Law&nbsp;and&nbsp;Arbitration&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;§15.&nbsp;Final&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_8">
                        8
                      </td>
                      <td nowrap="nowrap">
                        Provisions&nbsp;<span class="diff_chg">33</span>
                        &nbsp;Exhibits:&nbsp;<span class="diff_chg">__</span>
                        &nbsp;Excerpt&nbsp;from&nbsp;Land&nbsp;Registry.&nbsp;
                        <span class="diff_sub">31&nbsp;</span>
                        __&nbsp;Measurements.&nbsp;
                        <span class="diff_sub">32&nbsp;</span>__&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_8">
                        8
                      </td>
                      <td nowrap="nowrap">
                        Provisions&nbsp;<span class="diff_chg">__</span>
                        &nbsp;Exhibits:&nbsp;<span class="diff_chg">1.</span>
                        &nbsp;Excerpt&nbsp;from&nbsp;Land&nbsp;Registry.&nbsp;__
                        <span class="diff_add">&nbsp;2.</span>
                        &nbsp;Measurements.&nbsp;__&nbsp;
                        <span class="diff_add">3.&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__1"></td>
                      <td class="diff_header" id="from0_9">
                        9
                      </td>
                      <td nowrap="nowrap">
                        Technical&nbsp;Description.&nbsp;
                        <span class="diff_sub">33&nbsp;</span>__&nbsp;N/A&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;Conditions&nbsp;for&nbsp;the&nbsp;Bank&nbsp;guarantee.&nbsp;
                        <span class="diff_sub">46&nbsp;</span>
                        __&nbsp;Service&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_9">
                        9
                      </td>
                      <td nowrap="nowrap">
                        Technical&nbsp;Description.&nbsp;__
                        <span class="diff_add">&nbsp;4.</span>&nbsp;N/A&nbsp;
                        <span class="diff_chg">5.</span>
                        &nbsp;Conditions&nbsp;for&nbsp;the&nbsp;Bank&nbsp;guarantee.&nbsp;__
                        <span class="diff_add">&nbsp;6.</span>
                        &nbsp;Service&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_10">
                        10
                      </td>
                      <td nowrap="nowrap">
                        Agreement.&nbsp;<span class="diff_sub">48&nbsp;</span>
                        __&nbsp;List&nbsp;of&nbsp;insurers&nbsp;and&nbsp;guarantors&nbsp;accepted&nbsp;by&nbsp;the&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">
                          __&nbsp;__&nbsp;__&nbsp;__&nbsp;__&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_10">
                        10
                      </td>
                      <td nowrap="nowrap">
                        Agreement.&nbsp;__<span class="diff_add">&nbsp;7.</span>
                        &nbsp;List&nbsp;of&nbsp;insurers&nbsp;and&nbsp;guarantors&nbsp;accepted&nbsp;by&nbsp;the&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">
                          10&nbsp;12&nbsp;14&nbsp;14&nbsp;16&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_11">
                        11
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          __&nbsp;__&nbsp;__&nbsp;__&nbsp;__&nbsp;__&nbsp;__&nbsp;__&nbsp;65&nbsp;LEASE&nbsp;AGREEMENT&nbsp;concluded&nbsp;in&nbsp;Zagreb&nbsp;on&nbsp;15&nbsp;(fifteenth)&nbsp;April&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_11">
                        11
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          21&nbsp;22&nbsp;24&nbsp;31&nbsp;32&nbsp;33&nbsp;46&nbsp;48&nbsp;65&nbsp;LEASE&nbsp;AGREEMENT&nbsp;concluded&nbsp;in&nbsp;Zagreb&nbsp;on&nbsp;15&nbsp;(fifteenth)&nbsp;April&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_12">
                        12
                      </td>
                      <td nowrap="nowrap">
                        2019&nbsp;(two&nbsp;thousand&nbsp;and&nbsp;nineteen)&nbsp;("Lease"),&nbsp;between:&nbsp;Hereinafter&nbsp;jointly&nbsp;called&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_12">
                        12
                      </td>
                      <td nowrap="nowrap">
                        2019&nbsp;(two&nbsp;thousand&nbsp;and&nbsp;nineteen)&nbsp;("Lease"),&nbsp;between:&nbsp;Hereinafter&nbsp;jointly&nbsp;called&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__2">n</a>
                      </td>
                      <td class="diff_header" id="from0_13">
                        13
                      </td>
                      <td nowrap="nowrap">
                        "Parties"&nbsp;or&nbsp;individually&nbsp;as&nbsp;the&nbsp;"Party".&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;The&nbsp;Subject&nbsp;of&nbsp;the&nbsp;Lease&nbsp;shall&nbsp;be:&nbsp;
                        <span class="diff_chg">_____</span>&nbsp;an&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__2">n</a>
                      </td>
                      <td class="diff_header" id="to0_13">
                        13
                      </td>
                      <td nowrap="nowrap">
                        "Parties"&nbsp;or&nbsp;individually&nbsp;as&nbsp;the&nbsp;"Party".&nbsp;
                        <span class="diff_chg">1.1</span>
                        &nbsp;The&nbsp;Subject&nbsp;of&nbsp;the&nbsp;Lease&nbsp;shall&nbsp;be:&nbsp;
                        <span class="diff_chg">1.2.1</span>&nbsp;an&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_14">
                        14
                      </td>
                      <td nowrap="nowrap">
                        office&nbsp;with&nbsp;a&nbsp;Net&nbsp;Exclusively&nbsp;Useable&nbsp;Office&nbsp;Area&nbsp;of&nbsp;approx.&nbsp;160&nbsp;
                        <span class="diff_sub">m2&nbsp;</span>
                        __&nbsp;(one&nbsp;hundred&nbsp;
                        <span class="diff_chg">and&nbsp;</span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_14">
                        14
                      </td>
                      <td nowrap="nowrap">
                        office&nbsp;with&nbsp;a&nbsp;Net&nbsp;Exclusively&nbsp;Useable&nbsp;Office&nbsp;Area&nbsp;of&nbsp;approx.&nbsp;160&nbsp;__
                        <span class="diff_add">&nbsp;m?</span>
                        &nbsp;(one&nbsp;hundred&nbsp;
                        <span class="diff_chg">___&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_15">
                        15
                      </td>
                      <td nowrap="nowrap">
                        _<span class="diff_sub">___</span>
                        &nbsp;sixty&nbsp;square&nbsp;meters),&nbsp;no.&nbsp;5.005,&nbsp;located&nbsp;on&nbsp;the&nbsp;fifth&nbsp;floor&nbsp;of&nbsp;the&nbsp;Building&nbsp;edged&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_15">
                        15
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">and</span>
                        _&nbsp;sixty&nbsp;square&nbsp;meters),&nbsp;no.&nbsp;5.005,&nbsp;located&nbsp;on&nbsp;the&nbsp;fifth&nbsp;floor&nbsp;of&nbsp;the&nbsp;Building&nbsp;edged&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_16">
                        16
                      </td>
                      <td nowrap="nowrap">
                        red&nbsp;on&nbsp;the&nbsp;drawing&nbsp;attached&nbsp;as&nbsp;Exhibit&nbsp;#2&nbsp;(the&nbsp;"Premises")&nbsp;increased&nbsp;for&nbsp;7&nbsp;m2&nbsp;(seven&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_16">
                        16
                      </td>
                      <td nowrap="nowrap">
                        red&nbsp;on&nbsp;the&nbsp;drawing&nbsp;attached&nbsp;as&nbsp;Exhibit&nbsp;#2&nbsp;(the&nbsp;"Premises")&nbsp;increased&nbsp;for&nbsp;7&nbsp;m2&nbsp;(seven&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_17">
                        17
                      </td>
                      <td nowrap="nowrap">
                        square&nbsp;meters)&nbsp;of&nbsp;internal&nbsp;corridor&nbsp;(for&nbsp;the&nbsp;avoidance&nbsp;of&nbsp;doubt&nbsp;all&nbsp;of&nbsp;the&nbsp;circulation&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_17">
                        17
                      </td>
                      <td nowrap="nowrap">
                        square&nbsp;meters)&nbsp;of&nbsp;internal&nbsp;corridor&nbsp;(for&nbsp;the&nbsp;avoidance&nbsp;of&nbsp;doubt&nbsp;all&nbsp;of&nbsp;the&nbsp;circulation&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_18">
                        18
                      </td>
                      <td nowrap="nowrap">
                        areas,&nbsp;lift&nbsp;lobby,&nbsp;corridors,&nbsp;toilets&nbsp;and&nbsp;social&nbsp;areas&nbsp;to&nbsp;be&nbsp;exclusively&nbsp;used&nbsp;by&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_18">
                        18
                      </td>
                      <td nowrap="nowrap">
                        areas,&nbsp;lift&nbsp;lobby,&nbsp;corridors,&nbsp;toilets&nbsp;and&nbsp;social&nbsp;areas&nbsp;to&nbsp;be&nbsp;exclusively&nbsp;used&nbsp;by&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__2"></td>
                      <td class="diff_header" id="from0_19">
                        19
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;shall&nbsp;be&nbsp;counted&nbsp;as&nbsp;Part&nbsp;of&nbsp;the&nbsp;Premises).&nbsp;The&nbsp;Tenant&nbsp;acknowledges&nbsp;that&nbsp;for&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_19">
                        19
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;shall&nbsp;be&nbsp;counted&nbsp;as&nbsp;Part&nbsp;of&nbsp;the&nbsp;Premises).&nbsp;The&nbsp;Tenant&nbsp;acknowledges&nbsp;that&nbsp;for&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_20">
                        20
                      </td>
                      <td nowrap="nowrap">
                        purposes&nbsp;of&nbsp;calculating&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;an&nbsp;eleven&nbsp;point&nbsp;six&nbsp;per&nbsp;cent&nbsp;(11.6%)&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_20">
                        20
                      </td>
                      <td nowrap="nowrap">
                        purposes&nbsp;of&nbsp;calculating&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;an&nbsp;eleven&nbsp;point&nbsp;six&nbsp;per&nbsp;cent&nbsp;(11.6%)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_21">
                        21
                      </td>
                      <td nowrap="nowrap">
                        (Floors&nbsp;4-9)&nbsp;add-on&nbsp;factor&nbsp;will&nbsp;be&nbsp;added&nbsp;to&nbsp;the&nbsp;Net&nbsp;Exclusively&nbsp;Usable&nbsp;Office&nbsp;Area&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_21">
                        21
                      </td>
                      <td nowrap="nowrap">
                        (Floors&nbsp;4-9)&nbsp;add-on&nbsp;factor&nbsp;will&nbsp;be&nbsp;added&nbsp;to&nbsp;the&nbsp;Net&nbsp;Exclusively&nbsp;Usable&nbsp;Office&nbsp;Area&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__3"></td>
                      <td class="diff_header" id="from0_22">
                        22
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;use&nbsp;of&nbsp;the&nbsp;Common&nbsp;Parts&nbsp;of&nbsp;the&nbsp;Building,&nbsp;(the&nbsp;"Gross&nbsp;Office&nbsp;Area"),&nbsp;as&nbsp;a&nbsp;result&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_22">
                        22
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;use&nbsp;of&nbsp;the&nbsp;Common&nbsp;Parts&nbsp;of&nbsp;the&nbsp;Building,&nbsp;(the&nbsp;"Gross&nbsp;Office&nbsp;Area"),&nbsp;as&nbsp;a&nbsp;result&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__3">n</a>
                      </td>
                      <td class="diff_header" id="from0_23">
                        23
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;will&nbsp;be&nbsp;payable&nbsp;on&nbsp;approx.&nbsp;186.37&nbsp;
                        <span class="diff_sub">m2&nbsp;</span>
                        __&nbsp;(one&nbsp;hundred&nbsp;eighty&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__3">n</a>
                      </td>
                      <td class="diff_header" id="to0_23">
                        23
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;will&nbsp;be&nbsp;payable&nbsp;on&nbsp;approx.&nbsp;186.37&nbsp;__
                        <span class="diff_add">&nbsp;m*</span>
                        &nbsp;(one&nbsp;hundred&nbsp;eighty&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__4"></td>
                      <td class="diff_header" id="from0_24">
                        24
                      </td>
                      <td nowrap="nowrap">
                        six&nbsp;point&nbsp;thirty&nbsp;seven&nbsp;square&nbsp;
                        <span class="diff_chg">
                          ___&nbsp;___&nbsp;___&nbsp;___&nbsp;___
                        </span>
                        &nbsp;meters);&nbsp;The&nbsp;Premises&nbsp;is&nbsp;hereinafter&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_24">
                        24
                      </td>
                      <td nowrap="nowrap">
                        six&nbsp;point&nbsp;thirty&nbsp;seven&nbsp;square&nbsp;
                        <span class="diff_chg">
                          1.2&nbsp;1.3&nbsp;1.4&nbsp;§2.&nbsp;21.
                        </span>
                        &nbsp;meters);&nbsp;The&nbsp;Premises&nbsp;is&nbsp;hereinafter&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_25">
                        25
                      </td>
                      <td nowrap="nowrap">
                        also&nbsp;referred&nbsp;to&nbsp;as&nbsp;leased&nbsp;area&nbsp;(the&nbsp;"Leased&nbsp;Area").&nbsp;Tenant&nbsp;is&nbsp;entitled&nbsp;to&nbsp;the&nbsp;use&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_25">
                        25
                      </td>
                      <td nowrap="nowrap">
                        also&nbsp;referred&nbsp;to&nbsp;as&nbsp;leased&nbsp;area&nbsp;(the&nbsp;"Leased&nbsp;Area").&nbsp;Tenant&nbsp;is&nbsp;entitled&nbsp;to&nbsp;the&nbsp;use&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__5">
                        <a href="#difflib_chg_to0__4">n</a>
                      </td>
                      <td class="diff_header" id="from0_26">
                        26
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;only&nbsp;for&nbsp;the&nbsp;purposes&nbsp;of&nbsp;office.&nbsp;
                        <span class="diff_chg">§2.</span>
                        &nbsp;Fit-out&nbsp;of&nbsp;the&nbsp;Premises&nbsp;The&nbsp;Landlord&nbsp;is&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__4">n</a>
                      </td>
                      <td class="diff_header" id="to0_26">
                        26
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;only&nbsp;for&nbsp;the&nbsp;purposes&nbsp;of&nbsp;office.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Fit-out&nbsp;of&nbsp;the&nbsp;Premises&nbsp;The&nbsp;Landlord&nbsp;is&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_27">
                        27
                      </td>
                      <td nowrap="nowrap">
                        undertaking&nbsp;to&nbsp;hand&nbsp;over&nbsp;the&nbsp;Premises&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;on&nbsp;1&nbsp;(first)&nbsp;January&nbsp;2020&nbsp;(two&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_27">
                        27
                      </td>
                      <td nowrap="nowrap">
                        undertaking&nbsp;to&nbsp;hand&nbsp;over&nbsp;the&nbsp;Premises&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;on&nbsp;1&nbsp;(first)&nbsp;January&nbsp;2020&nbsp;(two&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__5">n</a>
                      </td>
                      <td class="diff_header" id="from0_28">
                        28
                      </td>
                      <td nowrap="nowrap">
                        thousand&nbsp;and&nbsp;twenty),&nbsp;at&nbsp;latest&nbsp;(the
                        <span class="diff_sub">&nbsp;„Delivery</span>
                        &nbsp;_________<span class="diff_chg">_</span>
                        &nbsp;Date“).&nbsp;The&nbsp;Tenant&nbsp;particularly&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__5">n</a>
                      </td>
                      <td class="diff_header" id="to0_28">
                        28
                      </td>
                      <td nowrap="nowrap">
                        thousand&nbsp;and&nbsp;twenty),&nbsp;at&nbsp;latest&nbsp;(the&nbsp;_________
                        <span class="diff_chg">&nbsp;,,Delivery</span>
                        &nbsp;Date“).&nbsp;The&nbsp;Tenant&nbsp;particularly&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_29">
                        29
                      </td>
                      <td nowrap="nowrap">
                        acknowledges&nbsp;that&nbsp;the&nbsp;prior&nbsp;tenant&nbsp;was&nbsp;using&nbsp;the&nbsp;Premises&nbsp;and&nbsp;that&nbsp;the&nbsp;Premises&nbsp;are&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_29">
                        29
                      </td>
                      <td nowrap="nowrap">
                        acknowledges&nbsp;that&nbsp;the&nbsp;prior&nbsp;tenant&nbsp;was&nbsp;using&nbsp;the&nbsp;Premises&nbsp;and&nbsp;that&nbsp;the&nbsp;Premises&nbsp;are&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__6">n</a>
                      </td>
                      <td class="diff_header" id="from0_30">
                        30
                      </td>
                      <td nowrap="nowrap">
                        handed&nbsp;over&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;in
                        <span class="diff_sub">&nbsp;„as</span>&nbsp;___
                        <span class="diff_chg">_</span>
                        &nbsp;is“&nbsp;condition.&nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;obtain&nbsp;at&nbsp;its&nbsp;own&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__6">n</a>
                      </td>
                      <td class="diff_header" id="to0_30">
                        30
                      </td>
                      <td nowrap="nowrap">
                        handed&nbsp;over&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;in&nbsp;___
                        <span class="diff_chg">&nbsp;,,as</span>
                        &nbsp;is“&nbsp;condition.&nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;obtain&nbsp;at&nbsp;its&nbsp;own&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_31">
                        31
                      </td>
                      <td nowrap="nowrap">
                        cost,&nbsp;all&nbsp;project&nbsp;documentation&nbsp;in&nbsp;accordance&nbsp;to&nbsp;Exhibit#2,&nbsp;which&nbsp;will&nbsp;contain&nbsp;all&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_31">
                        31
                      </td>
                      <td nowrap="nowrap">
                        cost,&nbsp;all&nbsp;project&nbsp;documentation&nbsp;in&nbsp;accordance&nbsp;to&nbsp;Exhibit#2,&nbsp;which&nbsp;will&nbsp;contain&nbsp;all&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__6"></td>
                      <td class="diff_header" id="from0_32">
                        32
                      </td>
                      <td nowrap="nowrap">
                        fit-out&nbsp;works&nbsp;that&nbsp;will&nbsp;be&nbsp;undertaken.&nbsp;In&nbsp;case&nbsp;that&nbsp;there&nbsp;is&nbsp;a&nbsp;need&nbsp;to&nbsp;obtain&nbsp;any&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_32">
                        32
                      </td>
                      <td nowrap="nowrap">
                        fit-out&nbsp;works&nbsp;that&nbsp;will&nbsp;be&nbsp;undertaken.&nbsp;In&nbsp;case&nbsp;that&nbsp;there&nbsp;is&nbsp;a&nbsp;need&nbsp;to&nbsp;obtain&nbsp;any&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_33">
                        33
                      </td>
                      <td nowrap="nowrap">
                        approval&nbsp;or&nbsp;permit&nbsp;from&nbsp;competent&nbsp;authorities&nbsp;in&nbsp;accordance&nbsp;to&nbsp;project&nbsp;documentation&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_33">
                        33
                      </td>
                      <td nowrap="nowrap">
                        approval&nbsp;or&nbsp;permit&nbsp;from&nbsp;competent&nbsp;authorities&nbsp;in&nbsp;accordance&nbsp;to&nbsp;project&nbsp;documentation&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_34">
                        34
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;is&nbsp;obliged&nbsp;to&nbsp;obtain&nbsp;mentioned&nbsp;approval&nbsp;or&nbsp;permit&nbsp;on&nbsp;Tenant’s&nbsp;cost.&nbsp;The&nbsp;Parties&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_34">
                        34
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;is&nbsp;obliged&nbsp;to&nbsp;obtain&nbsp;mentioned&nbsp;approval&nbsp;or&nbsp;permit&nbsp;on&nbsp;Tenant’s&nbsp;cost.&nbsp;The&nbsp;Parties&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_35">
                        35
                      </td>
                      <td nowrap="nowrap">
                        agree&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;at&nbsp;its&nbsp;own&nbsp;cost&nbsp;perform&nbsp;fit-out&nbsp;works&nbsp;in&nbsp;accordance&nbsp;with&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_35">
                        35
                      </td>
                      <td nowrap="nowrap">
                        agree&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;at&nbsp;its&nbsp;own&nbsp;cost&nbsp;perform&nbsp;fit-out&nbsp;works&nbsp;in&nbsp;accordance&nbsp;with&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__7">n</a>
                      </td>
                      <td class="diff_header" id="from0_36">
                        36
                      </td>
                      <td nowrap="nowrap">
                        design&nbsp;and&nbsp;specifications&nbsp;from&nbsp;__
                        <span class="diff_sub">_</span>
                        &nbsp;Exhibit#2,&nbsp;professional&nbsp;standards,&nbsp;applicable&nbsp;law&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__7">n</a>
                      </td>
                      <td class="diff_header" id="to0_36">
                        36
                      </td>
                      <td nowrap="nowrap">
                        design&nbsp;and&nbsp;specifications&nbsp;from&nbsp;_
                        <span class="diff_add">—</span>
                        _&nbsp;Exhibit#2,&nbsp;professional&nbsp;standards,&nbsp;applicable&nbsp;law&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_37">
                        37
                      </td>
                      <td nowrap="nowrap">
                        requirements&nbsp;and&nbsp;Landlord’s&nbsp;instructions&nbsp;(the&nbsp;“Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant”).&nbsp;The&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_37">
                        37
                      </td>
                      <td nowrap="nowrap">
                        requirements&nbsp;and&nbsp;Landlord’s&nbsp;instructions&nbsp;(the&nbsp;“Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant”).&nbsp;The&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_38">
                        38
                      </td>
                      <td nowrap="nowrap">
                        is&nbsp;undertaking&nbsp;to&nbsp;complete&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;until&nbsp;1&nbsp;(first)&nbsp;May&nbsp;2019&nbsp;(two&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_38">
                        38
                      </td>
                      <td nowrap="nowrap">
                        is&nbsp;undertaking&nbsp;to&nbsp;complete&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;until&nbsp;1&nbsp;(first)&nbsp;May&nbsp;2019&nbsp;(two&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_39">
                        39
                      </td>
                      <td nowrap="nowrap">
                        thousand&nbsp;and&nbsp;nineteen)&nbsp;at&nbsp;latest.&nbsp;In&nbsp;regard&nbsp;to&nbsp;the&nbsp;undertaking&nbsp;of&nbsp;the&nbsp;works,&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_39">
                        39
                      </td>
                      <td nowrap="nowrap">
                        thousand&nbsp;and&nbsp;nineteen)&nbsp;at&nbsp;latest.&nbsp;In&nbsp;regard&nbsp;to&nbsp;the&nbsp;undertaking&nbsp;of&nbsp;the&nbsp;works,&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_40">
                        40
                      </td>
                      <td nowrap="nowrap">
                        is&nbsp;obliged&nbsp;to&nbsp;act&nbsp;fully&nbsp;in&nbsp;compliance&nbsp;with&nbsp;the&nbsp;provisions&nbsp;of&nbsp;Articles&nbsp;10.1.,&nbsp;10.2.&nbsp;and&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_40">
                        40
                      </td>
                      <td nowrap="nowrap">
                        is&nbsp;obliged&nbsp;to&nbsp;act&nbsp;fully&nbsp;in&nbsp;compliance&nbsp;with&nbsp;the&nbsp;provisions&nbsp;of&nbsp;Articles&nbsp;10.1.,&nbsp;10.2.&nbsp;and&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__7"></td>
                      <td class="diff_header" id="from0_44">
                        44
                      </td>
                      <td nowrap="nowrap">
                        accordance&nbsp;with&nbsp;this&nbsp;Lease.&nbsp;In&nbsp;case&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;obtain&nbsp;the&nbsp;respective&nbsp;insurance&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_44">
                        44
                      </td>
                      <td nowrap="nowrap">
                        accordance&nbsp;with&nbsp;this&nbsp;Lease.&nbsp;In&nbsp;case&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;obtain&nbsp;the&nbsp;respective&nbsp;insurance&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_45">
                        45
                      </td>
                      <td nowrap="nowrap">
                        policy,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;entitled&nbsp;to&nbsp;charge&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;a&nbsp;EUR&nbsp;200&nbsp;(two&nbsp;hundred&nbsp;euro)&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_45">
                        45
                      </td>
                      <td nowrap="nowrap">
                        policy,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;entitled&nbsp;to&nbsp;charge&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;a&nbsp;EUR&nbsp;200&nbsp;(two&nbsp;hundred&nbsp;euro)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_46">
                        46
                      </td>
                      <td nowrap="nowrap">
                        penalty&nbsp;fee&nbsp;for&nbsp;every&nbsp;day&nbsp;of&nbsp;delay&nbsp;as&nbsp;of&nbsp;commencement&nbsp;of&nbsp;the&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_46">
                        46
                      </td>
                      <td nowrap="nowrap">
                        penalty&nbsp;fee&nbsp;for&nbsp;every&nbsp;day&nbsp;of&nbsp;delay&nbsp;as&nbsp;of&nbsp;commencement&nbsp;of&nbsp;the&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_47">
                        47
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;also&nbsp;to&nbsp;obtain&nbsp;such&nbsp;insurance&nbsp;policy&nbsp;at&nbsp;Tenant’s&nbsp;expense&nbsp;if&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_47">
                        47
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;also&nbsp;to&nbsp;obtain&nbsp;such&nbsp;insurance&nbsp;policy&nbsp;at&nbsp;Tenant’s&nbsp;expense&nbsp;if&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__8">n</a>
                      </td>
                      <td class="diff_header" id="from0_48">
                        48
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          obtain&nbsp;such&nbsp;policy&nbsp;in&nbsp;given&nbsp;term&nbsp;after&nbsp;the&nbsp;warning&nbsp;notice.&nbsp;The&nbsp;Landlord&nbsp;shall&nbsp;cover&nbsp;the&nbsp;
                        </span>
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__8">n</a>
                      </td>
                      <td class="diff_header" id="to0_48">
                        48
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          obtain&nbsp;such&nbsp;policy&nbsp;in&nbsp;given&nbsp;term&nbsp;after&nbsp;the&nbsp;warning&nbsp;notice.&nbsp;___&nbsp;________&nbsp;_____&nbsp;_____&nbsp;___&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_49">
                        49
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          cost&nbsp;of&nbsp;the&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;up&nbsp;to&nbsp;the&nbsp;Croatian&nbsp;Kuna&nbsp;counter&nbsp;value&nbsp;of&nbsp;EUR&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_49">
                        49
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          ____&nbsp;__&nbsp;___&nbsp;___&nbsp;___&nbsp;_____&nbsp;__&nbsp;___&nbsp;______&nbsp;__&nbsp;__&nbsp;___&nbsp;________&nbsp;____&nbsp;_______&nbsp;_____&nbsp;__&nbsp;___&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_50">
                        50
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          20,000.00&nbsp;(twenty&nbsp;thousand&nbsp;euro),&nbsp;VAT&nbsp;not&nbsp;included.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;doubt,&nbsp;should&nbsp;the&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_50">
                        50
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          _________&nbsp;_______&nbsp;________&nbsp;______&nbsp;___&nbsp;___&nbsp;_________&nbsp;___&nbsp;_________&nbsp;__&nbsp;______&nbsp;______&nbsp;___&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_51">
                        51
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          value&nbsp;of&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;exceed&nbsp;the&nbsp;said&nbsp;EUR&nbsp;20,000.00&nbsp;(twenty&nbsp;thousand&nbsp;euro)&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_51">
                        51
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          _____&nbsp;__&nbsp;___&nbsp;___&nbsp;_____&nbsp;__&nbsp;___&nbsp;______&nbsp;______&nbsp;___&nbsp;____&nbsp;___&nbsp;_________&nbsp;_______&nbsp;________&nbsp;_____&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_52">
                        52
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          (VAT&nbsp;excluded)&nbsp;such&nbsp;costs&nbsp;shall&nbsp;be&nbsp;borne&nbsp;by&nbsp;the&nbsp;Tenant.&nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;issue&nbsp;an&nbsp;invoice&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_52">
                        52
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          ____&nbsp;_________&nbsp;____&nbsp;_____&nbsp;_____&nbsp;__&nbsp;_____&nbsp;__&nbsp;___&nbsp;_______&nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;issue&nbsp;an&nbsp;invoice&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_53">
                        53
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;the&nbsp;Landlord&nbsp;for&nbsp;the&nbsp;specified&nbsp;amount,&nbsp;with&nbsp;the&nbsp;earliest&nbsp;due&nbsp;date&nbsp;being&nbsp;2&nbsp;(two)&nbsp;months&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_53">
                        53
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;the&nbsp;Landlord&nbsp;for&nbsp;the&nbsp;specified&nbsp;amount,&nbsp;with&nbsp;the&nbsp;earliest&nbsp;due&nbsp;date&nbsp;being&nbsp;2&nbsp;(two)&nbsp;months&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_54">
                        54
                      </td>
                      <td nowrap="nowrap">
                        as&nbsp;of&nbsp;the&nbsp;Commencement&nbsp;Date.&nbsp;Such&nbsp;invoice&nbsp;must&nbsp;in&nbsp;its&nbsp;full&nbsp;amount&nbsp;due,&nbsp;be&nbsp;underlined&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_54">
                        54
                      </td>
                      <td nowrap="nowrap">
                        as&nbsp;of&nbsp;the&nbsp;Commencement&nbsp;Date.&nbsp;Such&nbsp;invoice&nbsp;must&nbsp;in&nbsp;its&nbsp;full&nbsp;amount&nbsp;due,&nbsp;be&nbsp;underlined&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_55">
                        55
                      </td>
                      <td nowrap="nowrap">
                        copies&nbsp;of&nbsp;the&nbsp;Tenant’s&nbsp;incoming&nbsp;supplier&nbsp;invoices&nbsp;related&nbsp;to&nbsp;the&nbsp;performance&nbsp;of&nbsp;fit&nbsp;out&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_55">
                        55
                      </td>
                      <td nowrap="nowrap">
                        copies&nbsp;of&nbsp;the&nbsp;Tenant’s&nbsp;incoming&nbsp;supplier&nbsp;invoices&nbsp;related&nbsp;to&nbsp;the&nbsp;performance&nbsp;of&nbsp;fit&nbsp;out&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_56">
                        56
                      </td>
                      <td nowrap="nowrap">
                        works&nbsp;as&nbsp;well&nbsp;as&nbsp;any&nbsp;other&nbsp;evidence&nbsp;of&nbsp;the&nbsp;performed&nbsp;fit&nbsp;out&nbsp;works&nbsp;and&nbsp;their&nbsp;value&nbsp;(e.g.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_56">
                        56
                      </td>
                      <td nowrap="nowrap">
                        works&nbsp;as&nbsp;well&nbsp;as&nbsp;any&nbsp;other&nbsp;evidence&nbsp;of&nbsp;the&nbsp;performed&nbsp;fit&nbsp;out&nbsp;works&nbsp;and&nbsp;their&nbsp;value&nbsp;(e.g.&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__8"></td>
                      <td class="diff_header" id="from0_68">
                        68
                      </td>
                      <td nowrap="nowrap">
                        term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;which&nbsp;was&nbsp;paid&nbsp;by&nbsp;the&nbsp;Landlord,&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;_&nbsp;the&nbsp;Landlord’s&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_68">
                        68
                      </td>
                      <td nowrap="nowrap">
                        term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;which&nbsp;was&nbsp;paid&nbsp;by&nbsp;the&nbsp;Landlord,&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;_&nbsp;the&nbsp;Landlord’s&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_69">
                        69
                      </td>
                      <td nowrap="nowrap">
                        ownership.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;any&nbsp;doubt,&nbsp;the&nbsp;improvements&nbsp;and&nbsp;construction&nbsp;works&nbsp;are&nbsp;deemed&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_69">
                        69
                      </td>
                      <td nowrap="nowrap">
                        ownership.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;any&nbsp;doubt,&nbsp;the&nbsp;improvements&nbsp;and&nbsp;construction&nbsp;works&nbsp;are&nbsp;deemed&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_70">
                        70
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;be&nbsp;any&nbsp;integral&nbsp;parts&nbsp;of&nbsp;the&nbsp;Premises&nbsp;which&nbsp;deconstruction/removal&nbsp;would&nbsp;cause&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_70">
                        70
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;be&nbsp;any&nbsp;integral&nbsp;parts&nbsp;of&nbsp;the&nbsp;Premises&nbsp;which&nbsp;deconstruction/removal&nbsp;would&nbsp;cause&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_71">
                        71
                      </td>
                      <td nowrap="nowrap">
                        decrease&nbsp;of&nbsp;usability&nbsp;of&nbsp;the&nbsp;Premises.&nbsp;If&nbsp;the&nbsp;Lease&nbsp;is&nbsp;terminated&nbsp;by&nbsp;fault&nbsp;of&nbsp;the&nbsp;Tenant,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_71">
                        71
                      </td>
                      <td nowrap="nowrap">
                        decrease&nbsp;of&nbsp;usability&nbsp;of&nbsp;the&nbsp;Premises.&nbsp;If&nbsp;the&nbsp;Lease&nbsp;is&nbsp;terminated&nbsp;by&nbsp;fault&nbsp;of&nbsp;the&nbsp;Tenant,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__9">n</a>
                      </td>
                      <td class="diff_header" id="from0_72">
                        72
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;repay&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;the&nbsp;entire&nbsp;amount&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;(which&nbsp;is&nbsp;paid&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__9">n</a>
                      </td>
                      <td class="diff_header" id="to0_72">
                        72
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;repay&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;the&nbsp;entire&nbsp;amount&nbsp;
                        <span class="diff_chg">2.3</span>
                        &nbsp;(which&nbsp;is&nbsp;paid&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_73">
                        73
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;Croatian&nbsp;Kuna&nbsp;as&nbsp;a&nbsp;countervalue)&nbsp;of&nbsp;Landlord’s&nbsp;contribution&nbsp;in&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_73">
                        73
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;Croatian&nbsp;Kuna&nbsp;as&nbsp;a&nbsp;countervalue)&nbsp;of&nbsp;Landlord’s&nbsp;contribution&nbsp;in&nbsp;Fit&nbsp;Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_74">
                        74
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;according&nbsp;to&nbsp;previous&nbsp;paragraphs&nbsp;of&nbsp;this&nbsp;Article,&nbsp;payable&nbsp;within&nbsp;30&nbsp;(thirty)&nbsp;days&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_74">
                        74
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;according&nbsp;to&nbsp;previous&nbsp;paragraphs&nbsp;of&nbsp;this&nbsp;Article,&nbsp;payable&nbsp;within&nbsp;30&nbsp;(thirty)&nbsp;days&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__9"></td>
                      <td class="diff_header" id="from0_75">
                        75
                      </td>
                      <td nowrap="nowrap">
                        following&nbsp;the&nbsp;Landlord’s&nbsp;request&nbsp;for&nbsp;payment&nbsp;being&nbsp;sent&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;Furthermore,&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_75">
                        75
                      </td>
                      <td nowrap="nowrap">
                        following&nbsp;the&nbsp;Landlord’s&nbsp;request&nbsp;for&nbsp;payment&nbsp;being&nbsp;sent&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;Furthermore,&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_76">
                        76
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;may&nbsp;lease&nbsp;parking&nbsp;places&nbsp;in&nbsp;the&nbsp;underground&nbsp;Garage&nbsp;of&nbsp;the&nbsp;Building&nbsp;up&nbsp;to&nbsp;15&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_76">
                        76
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;may&nbsp;lease&nbsp;parking&nbsp;places&nbsp;in&nbsp;the&nbsp;underground&nbsp;Garage&nbsp;of&nbsp;the&nbsp;Building&nbsp;up&nbsp;to&nbsp;15&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_77">
                        77
                      </td>
                      <td nowrap="nowrap">
                        (fifteen)&nbsp;parking&nbsp;places&nbsp;(“Parking&nbsp;Places”).&nbsp;It&nbsp;is&nbsp;noted&nbsp;and&nbsp;agreed&nbsp;by&nbsp;the&nbsp;Parties&nbsp;that&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_77">
                        77
                      </td>
                      <td nowrap="nowrap">
                        (fifteen)&nbsp;parking&nbsp;places&nbsp;(“Parking&nbsp;Places”).&nbsp;It&nbsp;is&nbsp;noted&nbsp;and&nbsp;agreed&nbsp;by&nbsp;the&nbsp;Parties&nbsp;that&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_78">
                        78
                      </td>
                      <td nowrap="nowrap">
                        those&nbsp;Parking&nbsp;Places&nbsp;are&nbsp;for&nbsp;exclusive&nbsp;Tenant’s&nbsp;use&nbsp;only&nbsp;during&nbsp;regular&nbsp;working&nbsp;hours&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_78">
                        78
                      </td>
                      <td nowrap="nowrap">
                        those&nbsp;Parking&nbsp;Places&nbsp;are&nbsp;for&nbsp;exclusive&nbsp;Tenant’s&nbsp;use&nbsp;only&nbsp;during&nbsp;regular&nbsp;working&nbsp;hours&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__10">n</a>
                      </td>
                      <td class="diff_header" id="from0_79">
                        79
                      </td>
                      <td nowrap="nowrap">
                        (Monday&nbsp;to&nbsp;Friday&nbsp;08,00&nbsp;
                        <span class="diff_sub">–&nbsp;</span>
                        _&nbsp;17,00)&nbsp;and&nbsp;are&nbsp;not&nbsp;for&nbsp;exclusive&nbsp;Tenant’s&nbsp;use&nbsp;during&nbsp;all&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__10">n</a>
                      </td>
                      <td class="diff_header" id="to0_79">
                        79
                      </td>
                      <td nowrap="nowrap">
                        (Monday&nbsp;to&nbsp;Friday&nbsp;08,00&nbsp;_
                        <span class="diff_add">&nbsp;—</span>
                        &nbsp;17,00)&nbsp;and&nbsp;are&nbsp;not&nbsp;for&nbsp;exclusive&nbsp;Tenant’s&nbsp;use&nbsp;during&nbsp;all&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_80">
                        80
                      </td>
                      <td nowrap="nowrap">
                        other&nbsp;hours&nbsp;(after&nbsp;17,00,&nbsp;on&nbsp;Saturdays,&nbsp;Sundays&nbsp;and&nbsp;holidays).&nbsp;However,&nbsp;the&nbsp;Tenant&nbsp;may&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_80">
                        80
                      </td>
                      <td nowrap="nowrap">
                        other&nbsp;hours&nbsp;(after&nbsp;17,00,&nbsp;on&nbsp;Saturdays,&nbsp;Sundays&nbsp;and&nbsp;holidays).&nbsp;However,&nbsp;the&nbsp;Tenant&nbsp;may&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_81">
                        81
                      </td>
                      <td nowrap="nowrap">
                        use&nbsp;Parking&nbsp;Places&nbsp;or&nbsp;any&nbsp;other&nbsp;parking&nbsp;spaces&nbsp;in&nbsp;other&nbsp;hours&nbsp;free&nbsp;of&nbsp;charge,&nbsp;if&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_81">
                        81
                      </td>
                      <td nowrap="nowrap">
                        use&nbsp;Parking&nbsp;Places&nbsp;or&nbsp;any&nbsp;other&nbsp;parking&nbsp;spaces&nbsp;in&nbsp;other&nbsp;hours&nbsp;free&nbsp;of&nbsp;charge,&nbsp;if&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_82">
                        82
                      </td>
                      <td nowrap="nowrap">
                        available.&nbsp;In&nbsp;the&nbsp;event&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;decides&nbsp;to&nbsp;lease&nbsp;the&nbsp;parking&nbsp;places&nbsp;the&nbsp;rent&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_82">
                        82
                      </td>
                      <td nowrap="nowrap">
                        available.&nbsp;In&nbsp;the&nbsp;event&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;decides&nbsp;to&nbsp;lease&nbsp;the&nbsp;parking&nbsp;places&nbsp;the&nbsp;rent&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_83">
                        83
                      </td>
                      <td nowrap="nowrap">
                        each&nbsp;parking&nbsp;place&nbsp;shall&nbsp;amount&nbsp;to&nbsp;65&nbsp;EUR&nbsp;(sixty&nbsp;five&nbsp;euro)&nbsp;per&nbsp;month,&nbsp;increased&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_83">
                        83
                      </td>
                      <td nowrap="nowrap">
                        each&nbsp;parking&nbsp;place&nbsp;shall&nbsp;amount&nbsp;to&nbsp;65&nbsp;EUR&nbsp;(sixty&nbsp;five&nbsp;euro)&nbsp;per&nbsp;month,&nbsp;increased&nbsp;for&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__10"></td>
                      <td class="diff_header" id="from0_87">
                        87
                      </td>
                      <td nowrap="nowrap">
                        applicable&nbsp;to&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;Parking&nbsp;places&nbsp;as&nbsp;well.&nbsp;If&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;Premises&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_87">
                        87
                      </td>
                      <td nowrap="nowrap">
                        applicable&nbsp;to&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;Parking&nbsp;places&nbsp;as&nbsp;well.&nbsp;If&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;Premises&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_88">
                        88
                      </td>
                      <td nowrap="nowrap">
                        should&nbsp;terminate,&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;parking&nbsp;places&nbsp;shall&nbsp;terminate&nbsp;as&nbsp;well,&nbsp;but&nbsp;if&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_88">
                        88
                      </td>
                      <td nowrap="nowrap">
                        should&nbsp;terminate,&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;parking&nbsp;places&nbsp;shall&nbsp;terminate&nbsp;as&nbsp;well,&nbsp;but&nbsp;if&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_89">
                        89
                      </td>
                      <td nowrap="nowrap">
                        lease&nbsp;of&nbsp;the&nbsp;parking&nbsp;places&nbsp;terminates,&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;Premises&nbsp;shall&nbsp;not&nbsp;automatically&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_89">
                        89
                      </td>
                      <td nowrap="nowrap">
                        lease&nbsp;of&nbsp;the&nbsp;parking&nbsp;places&nbsp;terminates,&nbsp;the&nbsp;lease&nbsp;of&nbsp;the&nbsp;Premises&nbsp;shall&nbsp;not&nbsp;automatically&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_90">
                        90
                      </td>
                      <td nowrap="nowrap">
                        terminate.&nbsp;The&nbsp;General&nbsp;Terms&nbsp;for&nbsp;using&nbsp;and&nbsp;lease&nbsp;of&nbsp;the&nbsp;Parking&nbsp;places&nbsp;shall&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_90">
                        90
                      </td>
                      <td nowrap="nowrap">
                        terminate.&nbsp;The&nbsp;General&nbsp;Terms&nbsp;for&nbsp;using&nbsp;and&nbsp;lease&nbsp;of&nbsp;the&nbsp;Parking&nbsp;places&nbsp;shall&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__11">
                        <a href="#difflib_chg_to0__11">n</a>
                      </td>
                      <td class="diff_header" id="from0_91">
                        91
                      </td>
                      <td nowrap="nowrap">
                        applicable&nbsp;as&nbsp;well,&nbsp;and&nbsp;by&nbsp;signing&nbsp;of&nbsp;
                        <span class="diff_chg">
                          ___&nbsp;___&nbsp;___&nbsp;___&nbsp;___
                        </span>
                        &nbsp;this&nbsp;Lease,&nbsp;the&nbsp;Tenant&nbsp;accepts&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__11">n</a>
                      </td>
                      <td class="diff_header" id="to0_91">
                        91
                      </td>
                      <td nowrap="nowrap">
                        applicable&nbsp;as&nbsp;well,&nbsp;and&nbsp;by&nbsp;signing&nbsp;of&nbsp;
                        <span class="diff_chg">
                          §3.&nbsp;3e1&nbsp;3.2&nbsp;3.3&nbsp;3.4
                        </span>
                        &nbsp;this&nbsp;Lease,&nbsp;the&nbsp;Tenant&nbsp;accepts&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_92">
                        92
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;comply&nbsp;with&nbsp;the&nbsp;same.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;any&nbsp;doubt,&nbsp;if&nbsp;during&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_92">
                        92
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;comply&nbsp;with&nbsp;the&nbsp;same.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;any&nbsp;doubt,&nbsp;if&nbsp;during&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_93">
                        93
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;requests&nbsp;for&nbsp;the&nbsp;Parking&nbsp;Places&nbsp;from&nbsp;this&nbsp;article&nbsp;2.3.,&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;provide&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_93">
                        93
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;requests&nbsp;for&nbsp;the&nbsp;Parking&nbsp;Places&nbsp;from&nbsp;this&nbsp;article&nbsp;2.3.,&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;provide&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_94">
                        94
                      </td>
                      <td nowrap="nowrap">
                        such&nbsp;Parking&nbsp;Places&nbsp;however&nbsp;it&nbsp;can&nbsp;refuse&nbsp;to&nbsp;do&nbsp;so&nbsp;in&nbsp;case&nbsp;such&nbsp;parking&nbsp;spaces&nbsp;are&nbsp;not&nbsp;at&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_94">
                        94
                      </td>
                      <td nowrap="nowrap">
                        such&nbsp;Parking&nbsp;Places&nbsp;however&nbsp;it&nbsp;can&nbsp;refuse&nbsp;to&nbsp;do&nbsp;so&nbsp;in&nbsp;case&nbsp;such&nbsp;parking&nbsp;spaces&nbsp;are&nbsp;not&nbsp;at&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__12">
                        <a href="#difflib_chg_to0__12">n</a>
                      </td>
                      <td class="diff_header" id="from0_95">
                        95
                      </td>
                      <td nowrap="nowrap">
                        Landlord’s&nbsp;disposal&nbsp;or&nbsp;due&nbsp;to&nbsp;any&nbsp;other&nbsp;justified&nbsp;reason.&nbsp;
                        <span class="diff_chg">§3.</span>
                        &nbsp;Commencement&nbsp;and&nbsp;Period&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__12">n</a>
                      </td>
                      <td class="diff_header" id="to0_95">
                        95
                      </td>
                      <td nowrap="nowrap">
                        Landlord’s&nbsp;disposal&nbsp;or&nbsp;due&nbsp;to&nbsp;any&nbsp;other&nbsp;justified&nbsp;reason.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Commencement&nbsp;and&nbsp;Period&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_96">
                        96
                      </td>
                      <td nowrap="nowrap">
                        Lease&nbsp;The&nbsp;Lease&nbsp;shall&nbsp;come&nbsp;into&nbsp;effect&nbsp;on&nbsp;the&nbsp;date&nbsp;when&nbsp;Lessee&nbsp;obtains&nbsp;the&nbsp;permit&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_96">
                        96
                      </td>
                      <td nowrap="nowrap">
                        Lease&nbsp;The&nbsp;Lease&nbsp;shall&nbsp;come&nbsp;into&nbsp;effect&nbsp;on&nbsp;the&nbsp;date&nbsp;when&nbsp;Lessee&nbsp;obtains&nbsp;the&nbsp;permit&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_97">
                        97
                      </td>
                      <td nowrap="nowrap">
                        performing&nbsp;business&nbsp;activities,&nbsp;about&nbsp;which&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;obliged&nbsp;to&nbsp;inform&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_97">
                        97
                      </td>
                      <td nowrap="nowrap">
                        performing&nbsp;business&nbsp;activities,&nbsp;about&nbsp;which&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;obliged&nbsp;to&nbsp;inform&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_98">
                        98
                      </td>
                      <td nowrap="nowrap">
                        immediately,&nbsp;or&nbsp;on&nbsp;1.&nbsp;(first)&nbsp;May&nbsp;2020.&nbsp;(two&nbsp;thousand&nbsp;twenty)&nbsp;whichever&nbsp;date&nbsp;occurs&nbsp;first&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_98">
                        98
                      </td>
                      <td nowrap="nowrap">
                        immediately,&nbsp;or&nbsp;on&nbsp;1.&nbsp;(first)&nbsp;May&nbsp;2020.&nbsp;(two&nbsp;thousand&nbsp;twenty)&nbsp;whichever&nbsp;date&nbsp;occurs&nbsp;first&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__13">n</a>
                      </td>
                      <td class="diff_header" id="from0_99">
                        99
                      </td>
                      <td nowrap="nowrap">
                        ("Commencement&nbsp;
                        <span class="diff_sub">Date").&nbsp;</span>
                        _______&nbsp;The&nbsp;Lease&nbsp;is&nbsp;concluded&nbsp;for&nbsp;a&nbsp;definite&nbsp;term&nbsp;of&nbsp;10&nbsp;(ten)&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__13">n</a>
                      </td>
                      <td class="diff_header" id="to0_99">
                        99
                      </td>
                      <td nowrap="nowrap">
                        ("Commencement&nbsp;_______&nbsp;
                        <span class="diff_add">Date’).&nbsp;</span>
                        The&nbsp;Lease&nbsp;is&nbsp;concluded&nbsp;for&nbsp;a&nbsp;definite&nbsp;term&nbsp;of&nbsp;10&nbsp;(ten)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_100">
                        100
                      </td>
                      <td nowrap="nowrap">
                        years&nbsp;commencing&nbsp;on&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;(the&nbsp;"Initial&nbsp;Lease&nbsp;Term").&nbsp;The&nbsp;Initial&nbsp;Lease&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_100">
                        100
                      </td>
                      <td nowrap="nowrap">
                        years&nbsp;commencing&nbsp;on&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;(the&nbsp;"Initial&nbsp;Lease&nbsp;Term").&nbsp;The&nbsp;Initial&nbsp;Lease&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_101">
                        101
                      </td>
                      <td nowrap="nowrap">
                        Term&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;extended&nbsp;for&nbsp;an&nbsp;additional&nbsp;period&nbsp;of&nbsp;5&nbsp;(five)&nbsp;years&nbsp;(“Lease&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_101">
                        101
                      </td>
                      <td nowrap="nowrap">
                        Term&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;extended&nbsp;for&nbsp;an&nbsp;additional&nbsp;period&nbsp;of&nbsp;5&nbsp;(five)&nbsp;years&nbsp;(“Lease&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_102">
                        102
                      </td>
                      <td nowrap="nowrap">
                        Extension”)&nbsp;provided&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;serves&nbsp;the&nbsp;Landlord&nbsp;with&nbsp;a&nbsp;written&nbsp;notice&nbsp;expressing&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_102">
                        102
                      </td>
                      <td nowrap="nowrap">
                        Extension”)&nbsp;provided&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;serves&nbsp;the&nbsp;Landlord&nbsp;with&nbsp;a&nbsp;written&nbsp;notice&nbsp;expressing&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_103">
                        103
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;intention&nbsp;to&nbsp;continue&nbsp;the&nbsp;lease&nbsp;at&nbsp;least&nbsp;6&nbsp;(six)&nbsp;months&nbsp;prior&nbsp;to&nbsp;the&nbsp;expiry&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_103">
                        103
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;intention&nbsp;to&nbsp;continue&nbsp;the&nbsp;lease&nbsp;at&nbsp;least&nbsp;6&nbsp;(six)&nbsp;months&nbsp;prior&nbsp;to&nbsp;the&nbsp;expiry&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__13"></td>
                      <td class="diff_header" id="from0_104">
                        104
                      </td>
                      <td nowrap="nowrap">
                        Initial&nbsp;Lease&nbsp;Term.&nbsp;In&nbsp;the&nbsp;event&nbsp;of&nbsp;Lease&nbsp;Extension,&nbsp;the&nbsp;applicable&nbsp;commercial&nbsp;terms&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_104">
                        104
                      </td>
                      <td nowrap="nowrap">
                        Initial&nbsp;Lease&nbsp;Term.&nbsp;In&nbsp;the&nbsp;event&nbsp;of&nbsp;Lease&nbsp;Extension,&nbsp;the&nbsp;applicable&nbsp;commercial&nbsp;terms&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_105">
                        105
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;those&nbsp;valid&nbsp;at&nbsp;the&nbsp;date&nbsp;of&nbsp;the&nbsp;expiry&nbsp;of&nbsp;the&nbsp;Initial&nbsp;Lease&nbsp;Term.&nbsp;For&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_105">
                        105
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;those&nbsp;valid&nbsp;at&nbsp;the&nbsp;date&nbsp;of&nbsp;the&nbsp;expiry&nbsp;of&nbsp;the&nbsp;Initial&nbsp;Lease&nbsp;Term.&nbsp;For&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_106">
                        106
                      </td>
                      <td nowrap="nowrap">
                        avoidance&nbsp;of&nbsp;doubt&nbsp;such&nbsp;commercial&nbsp;terms&nbsp;shall&nbsp;not&nbsp;include&nbsp;term&nbsp;of&nbsp;lease,&nbsp;any&nbsp;obligations&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_106">
                        106
                      </td>
                      <td nowrap="nowrap">
                        avoidance&nbsp;of&nbsp;doubt&nbsp;such&nbsp;commercial&nbsp;terms&nbsp;shall&nbsp;not&nbsp;include&nbsp;term&nbsp;of&nbsp;lease,&nbsp;any&nbsp;obligations&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_107">
                        107
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Landlord&nbsp;to&nbsp;participate&nbsp;in&nbsp;the&nbsp;Fit-Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;any&nbsp;discounted&nbsp;rent&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_107">
                        107
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Landlord&nbsp;to&nbsp;participate&nbsp;in&nbsp;the&nbsp;Fit-Out&nbsp;Works&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;any&nbsp;discounted&nbsp;rent&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__14">n</a>
                      </td>
                      <td class="diff_header" id="from0_108">
                        108
                      </td>
                      <td nowrap="nowrap">
                        periods&nbsp;from&nbsp;this&nbsp;Lease&nbsp;Agreement&nbsp;or&nbsp;
                        <span class="diff_chg">
                          ___&nbsp;___&nbsp;___&nbsp;___
                        </span>
                        &nbsp;its&nbsp;subsequent&nbsp;amendments.&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__14">n</a>
                      </td>
                      <td class="diff_header" id="to0_108">
                        108
                      </td>
                      <td nowrap="nowrap">
                        periods&nbsp;from&nbsp;this&nbsp;Lease&nbsp;Agreement&nbsp;or&nbsp;
                        <span class="diff_chg">
                          3.5&nbsp;3.6&nbsp;3.7&nbsp;3.8
                        </span>
                        &nbsp;its&nbsp;subsequent&nbsp;amendments.&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_109">
                        109
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;will&nbsp;deliver&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;take&nbsp;over&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;on&nbsp;the&nbsp;latest&nbsp;on&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_109">
                        109
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;will&nbsp;deliver&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;take&nbsp;over&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;on&nbsp;the&nbsp;latest&nbsp;on&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_110">
                        110
                      </td>
                      <td nowrap="nowrap">
                        Delivery&nbsp;Date,&nbsp;on&nbsp;which&nbsp;occasion&nbsp;the&nbsp;Parties&nbsp;shall&nbsp;make&nbsp;handover&nbsp;minutes&nbsp;(the&nbsp;template&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_110">
                        110
                      </td>
                      <td nowrap="nowrap">
                        Delivery&nbsp;Date,&nbsp;on&nbsp;which&nbsp;occasion&nbsp;the&nbsp;Parties&nbsp;shall&nbsp;make&nbsp;handover&nbsp;minutes&nbsp;(the&nbsp;template&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_111">
                        111
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;minutes&nbsp;is&nbsp;attached&nbsp;hereto&nbsp;as&nbsp;Exhibit&nbsp;#4).&nbsp;In&nbsp;case&nbsp;of&nbsp;a&nbsp;delay&nbsp;in&nbsp;the&nbsp;handover&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_111">
                        111
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;minutes&nbsp;is&nbsp;attached&nbsp;hereto&nbsp;as&nbsp;Exhibit&nbsp;#4).&nbsp;In&nbsp;case&nbsp;of&nbsp;a&nbsp;delay&nbsp;in&nbsp;the&nbsp;handover&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_112">
                        112
                      </td>
                      <td nowrap="nowrap">
                        Leased&nbsp;Area&nbsp;attributable&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;if&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;take&nbsp;over&nbsp;the&nbsp;Leased&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_112">
                        112
                      </td>
                      <td nowrap="nowrap">
                        Leased&nbsp;Area&nbsp;attributable&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;if&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;take&nbsp;over&nbsp;the&nbsp;Leased&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__14"></td>
                      <td class="diff_header" id="from0_135">
                        135
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;above&nbsp;but&nbsp;it&nbsp;shall&nbsp;not&nbsp;be&nbsp;liable&nbsp;for&nbsp;any&nbsp;further&nbsp;compensation&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;In&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_135">
                        135
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;above&nbsp;but&nbsp;it&nbsp;shall&nbsp;not&nbsp;be&nbsp;liable&nbsp;for&nbsp;any&nbsp;further&nbsp;compensation&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;In&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_136">
                        136
                      </td>
                      <td nowrap="nowrap">
                        addition,&nbsp;Landlord&nbsp;shall&nbsp;immediately&nbsp;return&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;the&nbsp;security&nbsp;defined&nbsp;in&nbsp;Clause&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_136">
                        136
                      </td>
                      <td nowrap="nowrap">
                        addition,&nbsp;Landlord&nbsp;shall&nbsp;immediately&nbsp;return&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;the&nbsp;security&nbsp;defined&nbsp;in&nbsp;Clause&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_137">
                        137
                      </td>
                      <td nowrap="nowrap">
                        3.9&nbsp;below.&nbsp;The&nbsp;Parties&nbsp;hereby&nbsp;state&nbsp;and&nbsp;confirm&nbsp;that&nbsp;the&nbsp;limitation&nbsp;of&nbsp;the&nbsp;Landlord's&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_137">
                        137
                      </td>
                      <td nowrap="nowrap">
                        3.9&nbsp;below.&nbsp;The&nbsp;Parties&nbsp;hereby&nbsp;state&nbsp;and&nbsp;confirm&nbsp;that&nbsp;the&nbsp;limitation&nbsp;of&nbsp;the&nbsp;Landlord's&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_138">
                        138
                      </td>
                      <td nowrap="nowrap">
                        liability&nbsp;for&nbsp;delay&nbsp;and&nbsp;failure&nbsp;of&nbsp;handover&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;set&nbsp;out&nbsp;in&nbsp;this&nbsp;Clause&nbsp;3.7&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_138">
                        138
                      </td>
                      <td nowrap="nowrap">
                        liability&nbsp;for&nbsp;delay&nbsp;and&nbsp;failure&nbsp;of&nbsp;handover&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;set&nbsp;out&nbsp;in&nbsp;this&nbsp;Clause&nbsp;3.7&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__15">
                        <a href="#difflib_chg_to0__15">n</a>
                      </td>
                      <td class="diff_header" id="from0_139">
                        139
                      </td>
                      <td nowrap="nowrap">
                        had&nbsp;duly&nbsp;been&nbsp;taken&nbsp;into&nbsp;consideration&nbsp;when&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;was&nbsp;agreed.&nbsp;
                        <span class="diff_chg">___</span>&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__15">n</a>
                      </td>
                      <td class="diff_header" id="to0_139">
                        139
                      </td>
                      <td nowrap="nowrap">
                        had&nbsp;duly&nbsp;been&nbsp;taken&nbsp;into&nbsp;consideration&nbsp;when&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;was&nbsp;agreed.&nbsp;
                        <span class="diff_chg">3.9</span>&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_140">
                        140
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;will&nbsp;measure&nbsp;the&nbsp;Premises&nbsp;before&nbsp;the&nbsp;handover&nbsp;or&nbsp;hire&nbsp;professionals&nbsp;for&nbsp;that&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_140">
                        140
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;will&nbsp;measure&nbsp;the&nbsp;Premises&nbsp;before&nbsp;the&nbsp;handover&nbsp;or&nbsp;hire&nbsp;professionals&nbsp;for&nbsp;that&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_141">
                        141
                      </td>
                      <td nowrap="nowrap">
                        purpose&nbsp;(architects,&nbsp;experts,&nbsp;technical&nbsp;service).&nbsp;The&nbsp;actual&nbsp;surface&nbsp;shall&nbsp;be&nbsp;measured&nbsp;on&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_141">
                        141
                      </td>
                      <td nowrap="nowrap">
                        purpose&nbsp;(architects,&nbsp;experts,&nbsp;technical&nbsp;service).&nbsp;The&nbsp;actual&nbsp;surface&nbsp;shall&nbsp;be&nbsp;measured&nbsp;on&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_142">
                        142
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;floor&nbsp;level&nbsp;without&nbsp;any&nbsp;overlapping&nbsp;of&nbsp;the&nbsp;surfaces.&nbsp;The&nbsp;Premises&nbsp;shall&nbsp;be&nbsp;measured&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_142">
                        142
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;floor&nbsp;level&nbsp;without&nbsp;any&nbsp;overlapping&nbsp;of&nbsp;the&nbsp;surfaces.&nbsp;The&nbsp;Premises&nbsp;shall&nbsp;be&nbsp;measured&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__16">n</a>
                      </td>
                      <td class="diff_header" id="from0_143">
                        143
                      </td>
                      <td nowrap="nowrap">
                        from&nbsp;the&nbsp;outer&nbsp;wall&nbsp;of&nbsp;the
                        <span class="diff_sub">&nbsp;façade</span>
                        &nbsp;______&nbsp;of&nbsp;the&nbsp;relevant&nbsp;side&nbsp;of&nbsp;the&nbsp;Object&nbsp;and&nbsp;from&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__16">n</a>
                      </td>
                      <td class="diff_header" id="to0_143">
                        143
                      </td>
                      <td nowrap="nowrap">
                        from&nbsp;the&nbsp;outer&nbsp;wall&nbsp;of&nbsp;the&nbsp;______&nbsp;
                        <span class="diff_add">fagade&nbsp;</span>
                        of&nbsp;the&nbsp;relevant&nbsp;side&nbsp;of&nbsp;the&nbsp;Object&nbsp;and&nbsp;from&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_144">
                        144
                      </td>
                      <td nowrap="nowrap">
                        centre&nbsp;of&nbsp;the&nbsp;partition&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;walls&nbsp;between&nbsp;Premises&nbsp;and&nbsp;_&nbsp;other&nbsp;tenants&nbsp;or&nbsp;the&nbsp;hallway.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_144">
                        144
                      </td>
                      <td nowrap="nowrap">
                        centre&nbsp;of&nbsp;the&nbsp;partition&nbsp;
                        <span class="diff_chg">3.9</span>
                        &nbsp;walls&nbsp;between&nbsp;Premises&nbsp;and&nbsp;_&nbsp;other&nbsp;tenants&nbsp;or&nbsp;the&nbsp;hallway.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_145">
                        145
                      </td>
                      <td nowrap="nowrap">
                        The&nbsp;actual&nbsp;surface&nbsp;of&nbsp;the&nbsp;Premises&nbsp;shall&nbsp;be&nbsp;confirmed&nbsp;by&nbsp;the&nbsp;Parties&nbsp;in&nbsp;the&nbsp;Handover&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_145">
                        145
                      </td>
                      <td nowrap="nowrap">
                        The&nbsp;actual&nbsp;surface&nbsp;of&nbsp;the&nbsp;Premises&nbsp;shall&nbsp;be&nbsp;confirmed&nbsp;by&nbsp;the&nbsp;Parties&nbsp;in&nbsp;the&nbsp;Handover&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_146">
                        146
                      </td>
                      <td nowrap="nowrap">
                        Protocol.&nbsp;Measurement&nbsp;will&nbsp;not&nbsp;be&nbsp;applied&nbsp;for&nbsp;Parking&nbsp;places.&nbsp;If&nbsp;the&nbsp;actual&nbsp;surface&nbsp;area&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_146">
                        146
                      </td>
                      <td nowrap="nowrap">
                        Protocol.&nbsp;Measurement&nbsp;will&nbsp;not&nbsp;be&nbsp;applied&nbsp;for&nbsp;Parking&nbsp;places.&nbsp;If&nbsp;the&nbsp;actual&nbsp;surface&nbsp;area&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_147">
                        147
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Premises&nbsp;is&nbsp;smaller&nbsp;than&nbsp;the&nbsp;area&nbsp;determined&nbsp;herein&nbsp;for&nbsp;no&nbsp;more&nbsp;than&nbsp;3&nbsp;(three)&nbsp;%,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_147">
                        147
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Premises&nbsp;is&nbsp;smaller&nbsp;than&nbsp;the&nbsp;area&nbsp;determined&nbsp;herein&nbsp;for&nbsp;no&nbsp;more&nbsp;than&nbsp;3&nbsp;(three)&nbsp;%,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_148">
                        148
                      </td>
                      <td nowrap="nowrap">
                        then&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;the&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;based&nbsp;on&nbsp;the&nbsp;surface&nbsp;as&nbsp;determined&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_148">
                        148
                      </td>
                      <td nowrap="nowrap">
                        then&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;the&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;based&nbsp;on&nbsp;the&nbsp;surface&nbsp;as&nbsp;determined&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__16"></td>
                      <td class="diff_header" id="from0_155">
                        155
                      </td>
                      <td nowrap="nowrap">
                        surface&nbsp;is&nbsp;smaller&nbsp;for&nbsp;more&nbsp;than&nbsp;3&nbsp;(three)%&nbsp;as&nbsp;determined&nbsp;herein,&nbsp;the&nbsp;Tenant&nbsp;will&nbsp;pay&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_155">
                        155
                      </td>
                      <td nowrap="nowrap">
                        surface&nbsp;is&nbsp;smaller&nbsp;for&nbsp;more&nbsp;than&nbsp;3&nbsp;(three)%&nbsp;as&nbsp;determined&nbsp;herein,&nbsp;the&nbsp;Tenant&nbsp;will&nbsp;pay&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_156">
                        156
                      </td>
                      <td nowrap="nowrap">
                        Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;based&nbsp;on&nbsp;the&nbsp;surface&nbsp;as&nbsp;determined&nbsp;herein&nbsp;decreased&nbsp;for&nbsp;3%&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_156">
                        156
                      </td>
                      <td nowrap="nowrap">
                        Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;based&nbsp;on&nbsp;the&nbsp;surface&nbsp;as&nbsp;determined&nbsp;herein&nbsp;decreased&nbsp;for&nbsp;3%&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_157">
                        157
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;entire&nbsp;term&nbsp;of&nbsp;the&nbsp;lease.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;doubt,&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;not&nbsp;entitled&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_157">
                        157
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;entire&nbsp;term&nbsp;of&nbsp;the&nbsp;lease.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;doubt,&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;not&nbsp;entitled&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_158">
                        158
                      </td>
                      <td nowrap="nowrap">
                        terminate&nbsp;this&nbsp;Lease&nbsp;in&nbsp;case&nbsp;of&nbsp;the&nbsp;respective&nbsp;deviations&nbsp;of&nbsp;the&nbsp;surface&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_158">
                        158
                      </td>
                      <td nowrap="nowrap">
                        terminate&nbsp;this&nbsp;Lease&nbsp;in&nbsp;case&nbsp;of&nbsp;the&nbsp;respective&nbsp;deviations&nbsp;of&nbsp;the&nbsp;surface&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__17">n</a>
                      </td>
                      <td class="diff_header" id="from0_159">
                        159
                      </td>
                      <td nowrap="nowrap">
                        Premises..&nbsp;<span class="diff_chg">3.9</span>
                        &nbsp;Tenant&nbsp;shall&nbsp;provide&nbsp;Landlord,&nbsp;at&nbsp;the&nbsp;latest&nbsp;within&nbsp;15&nbsp;(fifteen)&nbsp;days&nbsp;from&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__17">n</a>
                      </td>
                      <td class="diff_header" id="to0_159">
                        159
                      </td>
                      <td nowrap="nowrap">
                        Premises..&nbsp;<span class="diff_chg">___</span>
                        &nbsp;Tenant&nbsp;shall&nbsp;provide&nbsp;Landlord,&nbsp;at&nbsp;the&nbsp;latest&nbsp;within&nbsp;15&nbsp;(fifteen)&nbsp;days&nbsp;from&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_160">
                        160
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;date&nbsp;of&nbsp;execution&nbsp;of&nbsp;this&nbsp;Agreement,&nbsp;an&nbsp;irrevocable&nbsp;and&nbsp;unconditional&nbsp;bank&nbsp;guarantee&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_160">
                        160
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;date&nbsp;of&nbsp;execution&nbsp;of&nbsp;this&nbsp;Agreement,&nbsp;an&nbsp;irrevocable&nbsp;and&nbsp;unconditional&nbsp;bank&nbsp;guarantee&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_161">
                        161
                      </td>
                      <td nowrap="nowrap">
                        issued&nbsp;by&nbsp;one&nbsp;of&nbsp;banks&nbsp;mentioned&nbsp;in&nbsp;Exhibit&nbsp;#7&nbsp;and&nbsp;containing&nbsp;all&nbsp;conditions&nbsp;specified&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_161">
                        161
                      </td>
                      <td nowrap="nowrap">
                        issued&nbsp;by&nbsp;one&nbsp;of&nbsp;banks&nbsp;mentioned&nbsp;in&nbsp;Exhibit&nbsp;#7&nbsp;and&nbsp;containing&nbsp;all&nbsp;conditions&nbsp;specified&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_162">
                        162
                      </td>
                      <td nowrap="nowrap">
                        Exhibit&nbsp;#5&nbsp;for&nbsp;an&nbsp;amount&nbsp;equal&nbsp;to&nbsp;the&nbsp;aggregate&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_162">
                        162
                      </td>
                      <td nowrap="nowrap">
                        Exhibit&nbsp;#5&nbsp;for&nbsp;an&nbsp;amount&nbsp;equal&nbsp;to&nbsp;the&nbsp;aggregate&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_163">
                        163
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;3&nbsp;(three)&nbsp;months&nbsp;(as&nbsp;defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;plus&nbsp;VAT.&nbsp;The&nbsp;bank&nbsp;guarantee&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_163">
                        163
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;3&nbsp;(three)&nbsp;months&nbsp;(as&nbsp;defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;plus&nbsp;VAT.&nbsp;The&nbsp;bank&nbsp;guarantee&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__17"></td>
                      <td class="diff_header" id="from0_180">
                        180
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;case&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;return&nbsp;the&nbsp;security&nbsp;deposit&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;within&nbsp;3&nbsp;(three)&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_180">
                        180
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;case&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;return&nbsp;the&nbsp;security&nbsp;deposit&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;within&nbsp;3&nbsp;(three)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_181">
                        181
                      </td>
                      <td nowrap="nowrap">
                        banking&nbsp;days&nbsp;of&nbsp;receiving&nbsp;the&nbsp;proper&nbsp;bank&nbsp;guarantee&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;provided&nbsp;that&nbsp;all&nbsp;due&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_181">
                        181
                      </td>
                      <td nowrap="nowrap">
                        banking&nbsp;days&nbsp;of&nbsp;receiving&nbsp;the&nbsp;proper&nbsp;bank&nbsp;guarantee&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;provided&nbsp;that&nbsp;all&nbsp;due&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__18"></td>
                      <td class="diff_header" id="from0_182">
                        182
                      </td>
                      <td nowrap="nowrap">
                        amounts&nbsp;pursuant&nbsp;to&nbsp;the&nbsp;delivered&nbsp;guarantee&nbsp;are&nbsp;settled&nbsp;by&nbsp;the&nbsp;Tenant.&nbsp;The&nbsp;above&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_182">
                        182
                      </td>
                      <td nowrap="nowrap">
                        amounts&nbsp;pursuant&nbsp;to&nbsp;the&nbsp;delivered&nbsp;guarantee&nbsp;are&nbsp;settled&nbsp;by&nbsp;the&nbsp;Tenant.&nbsp;The&nbsp;above&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_183">
                        183
                      </td>
                      <td nowrap="nowrap">
                        provisions&nbsp;on&nbsp;the&nbsp;extension&nbsp;of&nbsp;the&nbsp;Lease&nbsp;Term&nbsp;shall&nbsp;apply&nbsp;to&nbsp;any&nbsp;subsequent&nbsp;extensions,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_183">
                        183
                      </td>
                      <td nowrap="nowrap">
                        provisions&nbsp;on&nbsp;the&nbsp;extension&nbsp;of&nbsp;the&nbsp;Lease&nbsp;Term&nbsp;shall&nbsp;apply&nbsp;to&nbsp;any&nbsp;subsequent&nbsp;extensions,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__18">n</a>
                      </td>
                      <td class="diff_header" id="from0_184">
                        184
                      </td>
                      <td nowrap="nowrap">
                        mutatis&nbsp;
                        <span class="diff_chg">____&nbsp;____</span>
                        &nbsp;mutandis.&nbsp;<span class="diff_chg">3.10</span>
                        &nbsp;The&nbsp;above&nbsp;bank&nbsp;guarantee&nbsp;may&nbsp;be&nbsp;exercised&nbsp;if&nbsp;Tenant&nbsp;is&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__18">n</a>
                      </td>
                      <td class="diff_header" id="to0_184">
                        184
                      </td>
                      <td nowrap="nowrap">
                        mutatis&nbsp;
                        <span class="diff_chg">3.10&nbsp;3.11</span>
                        &nbsp;mutandis.&nbsp;<span class="diff_chg">____</span>
                        &nbsp;The&nbsp;above&nbsp;bank&nbsp;guarantee&nbsp;may&nbsp;be&nbsp;exercised&nbsp;if&nbsp;Tenant&nbsp;is&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_185">
                        185
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;breach&nbsp;of&nbsp;any&nbsp;of&nbsp;its&nbsp;obligations&nbsp;as&nbsp;per&nbsp;_&nbsp;this&nbsp;Agreement,&nbsp;including&nbsp;but&nbsp;not&nbsp;limited&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_185">
                        185
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;breach&nbsp;of&nbsp;any&nbsp;of&nbsp;its&nbsp;obligations&nbsp;as&nbsp;per&nbsp;_&nbsp;this&nbsp;Agreement,&nbsp;including&nbsp;but&nbsp;not&nbsp;limited&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__19">n</a>
                      </td>
                      <td class="diff_header" id="from0_186">
                        186
                      </td>
                      <td nowrap="nowrap">
                        to:&nbsp;<span class="diff_chg">_</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;duly&nbsp;pay&nbsp;its&nbsp;Rent&nbsp;and/or&nbsp;any&nbsp;other&nbsp;payment&nbsp;due&nbsp;under&nbsp;this&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__19">n</a>
                      </td>
                      <td class="diff_header" id="to0_186">
                        186
                      </td>
                      <td nowrap="nowrap">
                        to:&nbsp;<span class="diff_chg">i</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;duly&nbsp;pay&nbsp;its&nbsp;Rent&nbsp;and/or&nbsp;any&nbsp;other&nbsp;payment&nbsp;due&nbsp;under&nbsp;this&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_187">
                        187
                      </td>
                      <td nowrap="nowrap">
                        Agreement&nbsp;on&nbsp;time;&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;reimburse&nbsp;costs&nbsp;related&nbsp;to&nbsp;repair&nbsp;of&nbsp;damages&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_187">
                        187
                      </td>
                      <td nowrap="nowrap">
                        Agreement&nbsp;on&nbsp;time;&nbsp;
                        <span class="diff_chg">ii</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;reimburse&nbsp;costs&nbsp;related&nbsp;to&nbsp;repair&nbsp;of&nbsp;damages&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__19"></td>
                      <td class="diff_header" id="from0_188">
                        188
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;which&nbsp;it&nbsp;is&nbsp;liable&nbsp;under&nbsp;this&nbsp;Agreement;&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;pay&nbsp;interests&nbsp;on&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_188">
                        188
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;which&nbsp;it&nbsp;is&nbsp;liable&nbsp;under&nbsp;this&nbsp;Agreement;&nbsp;
                        <span class="diff_chg">iii</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;pay&nbsp;interests&nbsp;on&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_189">
                        189
                      </td>
                      <td nowrap="nowrap">
                        payments&nbsp;in&nbsp;default;&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;vacate&nbsp;the&nbsp;Premises&nbsp;in&nbsp;due&nbsp;time;&nbsp;and&nbsp;In&nbsp;case&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_189">
                        189
                      </td>
                      <td nowrap="nowrap">
                        payments&nbsp;in&nbsp;default;&nbsp;
                        <span class="diff_chg">iv</span>
                        &nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;vacate&nbsp;the&nbsp;Premises&nbsp;in&nbsp;due&nbsp;time;&nbsp;and&nbsp;In&nbsp;case&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_190">
                        190
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;any&nbsp;draw-down&nbsp;from&nbsp;the&nbsp;guarantee,&nbsp;Tenant&nbsp;shall&nbsp;reinstate&nbsp;the&nbsp;guarantee&nbsp;to&nbsp;the&nbsp;original&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_190">
                        190
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;any&nbsp;draw-down&nbsp;from&nbsp;the&nbsp;guarantee,&nbsp;Tenant&nbsp;shall&nbsp;reinstate&nbsp;the&nbsp;guarantee&nbsp;to&nbsp;the&nbsp;original&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_191">
                        191
                      </td>
                      <td nowrap="nowrap">
                        amount&nbsp;within&nbsp;14&nbsp;(fourteen)&nbsp;days&nbsp;from&nbsp;the&nbsp;date&nbsp;of&nbsp;receipt&nbsp;by&nbsp;Tenant&nbsp;of&nbsp;a&nbsp;written&nbsp;notice&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_191">
                        191
                      </td>
                      <td nowrap="nowrap">
                        amount&nbsp;within&nbsp;14&nbsp;(fourteen)&nbsp;days&nbsp;from&nbsp;the&nbsp;date&nbsp;of&nbsp;receipt&nbsp;by&nbsp;Tenant&nbsp;of&nbsp;a&nbsp;written&nbsp;notice&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__20">
                        <a href="#difflib_chg_to0__20">n</a>
                      </td>
                      <td class="diff_header" id="from0_192">
                        192
                      </td>
                      <td nowrap="nowrap">
                        sent&nbsp;by&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">3.11</span>
                        &nbsp;Should&nbsp;the&nbsp;Tenant&nbsp;not&nbsp;provide&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;within&nbsp;due&nbsp;time,&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__20">n</a>
                      </td>
                      <td class="diff_header" id="to0_192">
                        192
                      </td>
                      <td nowrap="nowrap">
                        sent&nbsp;by&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;Should&nbsp;the&nbsp;Tenant&nbsp;not&nbsp;provide&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;within&nbsp;due&nbsp;time,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_193">
                        193
                      </td>
                      <td nowrap="nowrap">
                        not&nbsp;renew&nbsp;the&nbsp;bank&nbsp;guarantee,&nbsp;or&nbsp;fail&nbsp;to&nbsp;restore&nbsp;or&nbsp;increase&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;in&nbsp;due&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_193">
                        193
                      </td>
                      <td nowrap="nowrap">
                        not&nbsp;renew&nbsp;the&nbsp;bank&nbsp;guarantee,&nbsp;or&nbsp;fail&nbsp;to&nbsp;restore&nbsp;or&nbsp;increase&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;in&nbsp;due&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_194">
                        194
                      </td>
                      <td nowrap="nowrap">
                        time,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;a&nbsp;contractual&nbsp;penalty&nbsp;in&nbsp;amount&nbsp;of&nbsp;EUR&nbsp;200&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_194">
                        194
                      </td>
                      <td nowrap="nowrap">
                        time,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;a&nbsp;contractual&nbsp;penalty&nbsp;in&nbsp;amount&nbsp;of&nbsp;EUR&nbsp;200&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_195">
                        195
                      </td>
                      <td nowrap="nowrap">
                        (two&nbsp;hundred&nbsp;euros)&nbsp;in&nbsp;Kuna&nbsp;counter&nbsp;value&nbsp;for&nbsp;each&nbsp;day&nbsp;of&nbsp;default.&nbsp;In&nbsp;addition,&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_195">
                        195
                      </td>
                      <td nowrap="nowrap">
                        (two&nbsp;hundred&nbsp;euros)&nbsp;in&nbsp;Kuna&nbsp;counter&nbsp;value&nbsp;for&nbsp;each&nbsp;day&nbsp;of&nbsp;default.&nbsp;In&nbsp;addition,&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__21">n</a>
                      </td>
                      <td class="diff_header" id="from0_196">
                        196
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;shall&nbsp;also&nbsp;be&nbsp;entitled&nbsp;to&nbsp;
                        <span class="diff_chg">____&nbsp;____&nbsp;____</span>
                        &nbsp;terminate&nbsp;this&nbsp;Lease&nbsp;as&nbsp;in&nbsp;the&nbsp;case&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__21">n</a>
                      </td>
                      <td class="diff_header" id="to0_196">
                        196
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;shall&nbsp;also&nbsp;be&nbsp;entitled&nbsp;to&nbsp;
                        <span class="diff_chg">3,12&nbsp;3.13&nbsp;3.14</span>
                        &nbsp;terminate&nbsp;this&nbsp;Lease&nbsp;as&nbsp;in&nbsp;the&nbsp;case&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_197">
                        197
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;pay&nbsp;Rent&nbsp;when&nbsp;due&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;an&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_197">
                        197
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant's&nbsp;failure&nbsp;to&nbsp;pay&nbsp;Rent&nbsp;when&nbsp;due&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;an&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_198">
                        198
                      </td>
                      <td nowrap="nowrap">
                        early&nbsp;termination&nbsp;fee&nbsp;of&nbsp;amount&nbsp;equal&nbsp;to&nbsp;the&nbsp;aggregate&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_198">
                        198
                      </td>
                      <td nowrap="nowrap">
                        early&nbsp;termination&nbsp;fee&nbsp;of&nbsp;amount&nbsp;equal&nbsp;to&nbsp;the&nbsp;aggregate&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_199">
                        199
                      </td>
                      <td nowrap="nowrap">
                        Charge&nbsp;for&nbsp;6&nbsp;(six)&nbsp;months&nbsp;(as&nbsp;defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;plus&nbsp;VAT,&nbsp;and&nbsp;compensate&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_199">
                        199
                      </td>
                      <td nowrap="nowrap">
                        Charge&nbsp;for&nbsp;6&nbsp;(six)&nbsp;months&nbsp;(as&nbsp;defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;plus&nbsp;VAT,&nbsp;and&nbsp;compensate&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_200">
                        200
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Landlord&nbsp;for&nbsp;any&nbsp;damages&nbsp;resulting&nbsp;there&nbsp;from&nbsp;in&nbsp;excess&nbsp;of&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;early&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_200">
                        200
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Landlord&nbsp;for&nbsp;any&nbsp;damages&nbsp;resulting&nbsp;there&nbsp;from&nbsp;in&nbsp;excess&nbsp;of&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;early&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__21"></td>
                      <td class="diff_header" id="from0_202">
                        202
                      </td>
                      <td nowrap="nowrap">
                        Lease).&nbsp;Such&nbsp;termination&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;as&nbsp;result&nbsp;of&nbsp;Tenant's&nbsp;fault.&nbsp;Notwithstanding&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_202">
                        202
                      </td>
                      <td nowrap="nowrap">
                        Lease).&nbsp;Such&nbsp;termination&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;as&nbsp;result&nbsp;of&nbsp;Tenant's&nbsp;fault.&nbsp;Notwithstanding&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_203">
                        203
                      </td>
                      <td nowrap="nowrap">
                        above,&nbsp;in&nbsp;the&nbsp;event&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;is&nbsp;not&nbsp;presented&nbsp;in&nbsp;due&nbsp;time&nbsp;to&nbsp;the&nbsp;Landlord,&nbsp;or&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_203">
                        203
                      </td>
                      <td nowrap="nowrap">
                        above,&nbsp;in&nbsp;the&nbsp;event&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;is&nbsp;not&nbsp;presented&nbsp;in&nbsp;due&nbsp;time&nbsp;to&nbsp;the&nbsp;Landlord,&nbsp;or&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_204">
                        204
                      </td>
                      <td nowrap="nowrap">
                        if&nbsp;the&nbsp;Tenant&nbsp;fails&nbsp;to&nbsp;restore&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;bank&nbsp;guarantee,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;entitled&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_204">
                        204
                      </td>
                      <td nowrap="nowrap">
                        if&nbsp;the&nbsp;Tenant&nbsp;fails&nbsp;to&nbsp;restore&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;bank&nbsp;guarantee,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;entitled&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_205">
                        205
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;refuse&nbsp;delivery&nbsp;of&nbsp;the&nbsp;Premises&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;until&nbsp;the&nbsp;Tenant&nbsp;delivers&nbsp;the&nbsp;bank&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_205">
                        205
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;refuse&nbsp;delivery&nbsp;of&nbsp;the&nbsp;Premises&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;until&nbsp;the&nbsp;Tenant&nbsp;delivers&nbsp;the&nbsp;bank&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__22">n</a>
                      </td>
                      <td class="diff_header" id="from0_206">
                        206
                      </td>
                      <td nowrap="nowrap">
                        guarantee&nbsp;or&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;is&nbsp;adjusted.&nbsp;
                        <span class="diff_chg">3.12</span>
                        &nbsp;After&nbsp;60&nbsp;(sixty)&nbsp;days&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__22">n</a>
                      </td>
                      <td class="diff_header" id="to0_206">
                        206
                      </td>
                      <td nowrap="nowrap">
                        guarantee&nbsp;or&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;is&nbsp;adjusted.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;After&nbsp;60&nbsp;(sixty)&nbsp;days&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__22"></td>
                      <td class="diff_header" id="from0_207">
                        207
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;termination&nbsp;of&nbsp;the&nbsp;Lease,&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;return&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;(or&nbsp;deposit)&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_207">
                        207
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;termination&nbsp;of&nbsp;the&nbsp;Lease,&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;return&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;(or&nbsp;deposit)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_208">
                        208
                      </td>
                      <td nowrap="nowrap">
                        after&nbsp;deduction&nbsp;of&nbsp;all&nbsp;sums&nbsp;that&nbsp;are&nbsp;unpaid&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;which&nbsp;the&nbsp;Landlord&nbsp;then&nbsp;is&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_208">
                        208
                      </td>
                      <td nowrap="nowrap">
                        after&nbsp;deduction&nbsp;of&nbsp;all&nbsp;sums&nbsp;that&nbsp;are&nbsp;unpaid&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;which&nbsp;the&nbsp;Landlord&nbsp;then&nbsp;is&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_209">
                        209
                      </td>
                      <td nowrap="nowrap">
                        entitled&nbsp;to&nbsp;withdraw&nbsp;provided&nbsp;that&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;be&nbsp;entitled&nbsp;to&nbsp;withhold&nbsp;the&nbsp;bank&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_209">
                        209
                      </td>
                      <td nowrap="nowrap">
                        entitled&nbsp;to&nbsp;withdraw&nbsp;provided&nbsp;that&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;be&nbsp;entitled&nbsp;to&nbsp;withhold&nbsp;the&nbsp;bank&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__23"></td>
                      <td class="diff_header" id="from0_210">
                        210
                      </td>
                      <td nowrap="nowrap">
                        guarantee&nbsp;(or&nbsp;deposit)&nbsp;for&nbsp;so&nbsp;long&nbsp;as&nbsp;there&nbsp;shall&nbsp;be&nbsp;any&nbsp;subsisting&nbsp;breach&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_210">
                        210
                      </td>
                      <td nowrap="nowrap">
                        guarantee&nbsp;(or&nbsp;deposit)&nbsp;for&nbsp;so&nbsp;long&nbsp;as&nbsp;there&nbsp;shall&nbsp;be&nbsp;any&nbsp;subsisting&nbsp;breach&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__23">n</a>
                      </td>
                      <td class="diff_header" id="from0_211">
                        211
                      </td>
                      <td nowrap="nowrap">
                        Tenant's&nbsp;obligations&nbsp;or&nbsp;the&nbsp;Landlord&nbsp;has&nbsp;a&nbsp;claim&nbsp;arising&nbsp;from&nbsp;this.&nbsp;
                        <span class="diff_chg">3.13</span>
                        &nbsp;Alternatively,&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__23">n</a>
                      </td>
                      <td class="diff_header" id="to0_211">
                        211
                      </td>
                      <td nowrap="nowrap">
                        Tenant's&nbsp;obligations&nbsp;or&nbsp;the&nbsp;Landlord&nbsp;has&nbsp;a&nbsp;claim&nbsp;arising&nbsp;from&nbsp;this.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;Alternatively,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_212">
                        212
                      </td>
                      <td nowrap="nowrap">
                        instead&nbsp;of&nbsp;a&nbsp;bank&nbsp;guarantee,&nbsp;the&nbsp;Tenant&nbsp;may&nbsp;pay&nbsp;to&nbsp;the&nbsp;Landlord’s&nbsp;account,&nbsp;a&nbsp;deposit,&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_212">
                        212
                      </td>
                      <td nowrap="nowrap">
                        instead&nbsp;of&nbsp;a&nbsp;bank&nbsp;guarantee,&nbsp;the&nbsp;Tenant&nbsp;may&nbsp;pay&nbsp;to&nbsp;the&nbsp;Landlord’s&nbsp;account,&nbsp;a&nbsp;deposit,&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__24"></td>
                      <td class="diff_header" id="from0_213">
                        213
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;case&nbsp;the&nbsp;provisions&nbsp;regarding&nbsp;bank&nbsp;guarantee&nbsp;appropriately&nbsp;apply&nbsp;to&nbsp;the&nbsp;deposit&nbsp;as&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_213">
                        213
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;case&nbsp;the&nbsp;provisions&nbsp;regarding&nbsp;bank&nbsp;guarantee&nbsp;appropriately&nbsp;apply&nbsp;to&nbsp;the&nbsp;deposit&nbsp;as&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__24">n</a>
                      </td>
                      <td class="diff_header" id="from0_214">
                        214
                      </td>
                      <td nowrap="nowrap">
                        well&nbsp;(including&nbsp;clauses&nbsp;3.9,&nbsp;3.10,&nbsp;3.11&nbsp;and&nbsp;3.12).&nbsp;
                        <span class="diff_chg">3.14</span>
                        &nbsp;The&nbsp;deposit&nbsp;amount&nbsp;shall&nbsp;be&nbsp;equal&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__24">n</a>
                      </td>
                      <td class="diff_header" id="to0_214">
                        214
                      </td>
                      <td nowrap="nowrap">
                        well&nbsp;(including&nbsp;clauses&nbsp;3.9,&nbsp;3.10,&nbsp;3.11&nbsp;and&nbsp;3.12).&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;The&nbsp;deposit&nbsp;amount&nbsp;shall&nbsp;be&nbsp;equal&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_215">
                        215
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;<span class="diff_chg">____</span>
                        &nbsp;the&nbsp;aggregate&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;for&nbsp;3&nbsp;(three)&nbsp;months&nbsp;(as&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_215">
                        215
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;<span class="diff_chg">3.15</span>
                        &nbsp;the&nbsp;aggregate&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;for&nbsp;3&nbsp;(three)&nbsp;months&nbsp;(as&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_216">
                        216
                      </td>
                      <td nowrap="nowrap">
                        defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;plus&nbsp;VAT,&nbsp;in&nbsp;HRK&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;selling&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_216">
                        216
                      </td>
                      <td nowrap="nowrap">
                        defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;plus&nbsp;VAT,&nbsp;in&nbsp;HRK&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;selling&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__25">
                        <a href="#difflib_chg_to0__25">n</a>
                      </td>
                      <td class="diff_header" id="from0_217">
                        217
                      </td>
                      <td nowrap="nowrap">
                        exchange&nbsp;rate&nbsp;of
                        <span class="diff_sub">&nbsp;Zagrebačka</span>
                        &nbsp;__________&nbsp;banka&nbsp;d.d&nbsp;for&nbsp;Euro.&nbsp;The&nbsp;Landlord&nbsp;shall&nbsp;enter&nbsp;into&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__25">n</a>
                      </td>
                      <td class="diff_header" id="to0_217">
                        217
                      </td>
                      <td nowrap="nowrap">
                        exchange&nbsp;rate&nbsp;of&nbsp;__________&nbsp;
                        <span class="diff_add">Zagrebacka&nbsp;</span>
                        banka&nbsp;d.d&nbsp;for&nbsp;Euro.&nbsp;The&nbsp;Landlord&nbsp;shall&nbsp;enter&nbsp;into&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_218">
                        218
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;with&nbsp;the&nbsp;foreign&nbsp;currency&nbsp;_________&nbsp;clause&nbsp;with&nbsp;Zagrebačka&nbsp;
                        </span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_218">
                        218
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;with&nbsp;the&nbsp;foreign&nbsp;________&nbsp;currency’&nbsp;clause&nbsp;with&nbsp;__________&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_219">
                        219
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">__________</span>
                        &nbsp;banka&nbsp;d.d.&nbsp;for&nbsp;the&nbsp;term&nbsp;of&nbsp;1&nbsp;(one)&nbsp;year&nbsp;from&nbsp;the&nbsp;day&nbsp;of&nbsp;payment&nbsp;of&nbsp;deposit,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_219">
                        219
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">Zagrebacka</span>
                        &nbsp;banka&nbsp;d.d.&nbsp;for&nbsp;the&nbsp;term&nbsp;of&nbsp;1&nbsp;(one)&nbsp;year&nbsp;from&nbsp;the&nbsp;day&nbsp;of&nbsp;payment&nbsp;of&nbsp;deposit,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_220">
                        220
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;shall&nbsp;be&nbsp;extended&nbsp;for&nbsp;each&nbsp;subsequent&nbsp;year,&nbsp;increased&nbsp;for&nbsp;the&nbsp;interests&nbsp;calculated&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_220">
                        220
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;shall&nbsp;be&nbsp;extended&nbsp;for&nbsp;each&nbsp;subsequent&nbsp;year,&nbsp;increased&nbsp;for&nbsp;the&nbsp;interests&nbsp;calculated&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__26">n</a>
                      </td>
                      <td class="diff_header" id="from0_221">
                        221
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">
                          by&nbsp;Zagrebačka&nbsp;__________&nbsp;banka&nbsp;d.d.&nbsp;which&nbsp;are&nbsp;being&nbsp;used&nbsp;by&nbsp;Zagrebačka&nbsp;__________&nbsp;banka&nbsp;
                        </span>
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__26">n</a>
                      </td>
                      <td class="diff_header" id="to0_221">
                        221
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_add">
                          by&nbsp;__________&nbsp;Zagrebacka&nbsp;banka&nbsp;d.d.&nbsp;which&nbsp;are&nbsp;being&nbsp;used&nbsp;by&nbsp;__________&nbsp;Zagrebacka&nbsp;banka&nbsp;
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_222">
                        222
                      </td>
                      <td nowrap="nowrap">
                        d.d.&nbsp;for&nbsp;the&nbsp;means&nbsp;of&nbsp;payment&nbsp;in&nbsp;Euro&nbsp;for&nbsp;a&nbsp;vista&nbsp;current&nbsp;accounts,&nbsp;and&nbsp;which&nbsp;have&nbsp;been&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_222">
                        222
                      </td>
                      <td nowrap="nowrap">
                        d.d.&nbsp;for&nbsp;the&nbsp;means&nbsp;of&nbsp;payment&nbsp;in&nbsp;Euro&nbsp;for&nbsp;a&nbsp;vista&nbsp;current&nbsp;accounts,&nbsp;and&nbsp;which&nbsp;have&nbsp;been&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_223">
                        223
                      </td>
                      <td nowrap="nowrap">
                        realized&nbsp;upon&nbsp;previous&nbsp;agreement&nbsp;on&nbsp;deposit,&nbsp;until&nbsp;the&nbsp;expiry&nbsp;or&nbsp;termination&nbsp;of&nbsp;this&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_223">
                        223
                      </td>
                      <td nowrap="nowrap">
                        realized&nbsp;upon&nbsp;previous&nbsp;agreement&nbsp;on&nbsp;deposit,&nbsp;until&nbsp;the&nbsp;expiry&nbsp;or&nbsp;termination&nbsp;of&nbsp;this&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__26"></td>
                      <td class="diff_header" id="from0_224">
                        224
                      </td>
                      <td nowrap="nowrap">
                        Agreement.&nbsp;Should&nbsp;the&nbsp;premature&nbsp;termination&nbsp;of&nbsp;the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;be&nbsp;required&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_224">
                        224
                      </td>
                      <td nowrap="nowrap">
                        Agreement.&nbsp;Should&nbsp;the&nbsp;premature&nbsp;termination&nbsp;of&nbsp;the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;be&nbsp;required&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_225">
                        225
                      </td>
                      <td nowrap="nowrap">
                        any&nbsp;reason,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;loose&nbsp;the&nbsp;right&nbsp;to&nbsp;interests&nbsp;which&nbsp;it&nbsp;would&nbsp;be&nbsp;entitled&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_225">
                        225
                      </td>
                      <td nowrap="nowrap">
                        any&nbsp;reason,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;loose&nbsp;the&nbsp;right&nbsp;to&nbsp;interests&nbsp;which&nbsp;it&nbsp;would&nbsp;be&nbsp;entitled&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__27"></td>
                      <td class="diff_header" id="from0_226">
                        226
                      </td>
                      <td nowrap="nowrap">
                        if&nbsp;the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;in&nbsp;effect&nbsp;had&nbsp;not&nbsp;been&nbsp;terminated.&nbsp;On&nbsp;the&nbsp;grounds&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_226">
                        226
                      </td>
                      <td nowrap="nowrap">
                        if&nbsp;the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;in&nbsp;effect&nbsp;had&nbsp;not&nbsp;been&nbsp;terminated.&nbsp;On&nbsp;the&nbsp;grounds&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_227">
                        227
                      </td>
                      <td nowrap="nowrap">
                        written&nbsp;request&nbsp;of&nbsp;the&nbsp;Tenant,&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;enter&nbsp;into&nbsp;the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_227">
                        227
                      </td>
                      <td nowrap="nowrap">
                        written&nbsp;request&nbsp;of&nbsp;the&nbsp;Tenant,&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;enter&nbsp;into&nbsp;the&nbsp;agreement&nbsp;on&nbsp;deposit&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__27">n</a>
                      </td>
                      <td class="diff_header" id="from0_228">
                        228
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;same&nbsp;period&nbsp;as&nbsp;of&nbsp;the&nbsp;Lease&nbsp;Term.&nbsp;
                        <span class="diff_chg">3.15</span>
                        &nbsp;If&nbsp;at&nbsp;any&nbsp;time&nbsp;during&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__27">n</a>
                      </td>
                      <td class="diff_header" id="to0_228">
                        228
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;same&nbsp;period&nbsp;as&nbsp;of&nbsp;the&nbsp;Lease&nbsp;Term.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;If&nbsp;at&nbsp;any&nbsp;time&nbsp;during&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_229">
                        229
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;make&nbsp;any&nbsp;payment&nbsp;that&nbsp;is&nbsp;due&nbsp;hereunder,&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;use&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_229">
                        229
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;make&nbsp;any&nbsp;payment&nbsp;that&nbsp;is&nbsp;due&nbsp;hereunder,&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;use&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__28">n</a>
                      </td>
                      <td class="diff_header" id="from0_230">
                        230
                      </td>
                      <td nowrap="nowrap">
                        funds&nbsp;from&nbsp;such&nbsp;a&nbsp;Deposit&nbsp;using&nbsp;the&nbsp;selling&nbsp;exchange&nbsp;rate&nbsp;of
                        <span class="diff_sub">&nbsp;Zagrebačka</span>
                        &nbsp;__________&nbsp;Banka&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__28">n</a>
                      </td>
                      <td class="diff_header" id="to0_230">
                        230
                      </td>
                      <td nowrap="nowrap">
                        funds&nbsp;from&nbsp;such&nbsp;a&nbsp;Deposit&nbsp;using&nbsp;the&nbsp;selling&nbsp;exchange&nbsp;rate&nbsp;of&nbsp;__________&nbsp;
                        <span class="diff_add">Zagrebacka&nbsp;</span>
                        Banka&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__28"></td>
                      <td class="diff_header" id="from0_231">
                        231
                      </td>
                      <td nowrap="nowrap">
                        d.d.&nbsp;for&nbsp;Euros,&nbsp;as&nbsp;of&nbsp;the&nbsp;date&nbsp;on&nbsp;which&nbsp;the&nbsp;invoice&nbsp;was&nbsp;due.&nbsp;If&nbsp;at&nbsp;any&nbsp;time&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_231">
                        231
                      </td>
                      <td nowrap="nowrap">
                        d.d.&nbsp;for&nbsp;Euros,&nbsp;as&nbsp;of&nbsp;the&nbsp;date&nbsp;on&nbsp;which&nbsp;the&nbsp;invoice&nbsp;was&nbsp;due.&nbsp;If&nbsp;at&nbsp;any&nbsp;time&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_232">
                        232
                      </td>
                      <td nowrap="nowrap">
                        exercises&nbsp;its&nbsp;right&nbsp;to&nbsp;use&nbsp;the&nbsp;funds&nbsp;paid&nbsp;as&nbsp;the&nbsp;Deposit,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;reinstate&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_232">
                        232
                      </td>
                      <td nowrap="nowrap">
                        exercises&nbsp;its&nbsp;right&nbsp;to&nbsp;use&nbsp;the&nbsp;funds&nbsp;paid&nbsp;as&nbsp;the&nbsp;Deposit,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;reinstate&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_233">
                        233
                      </td>
                      <td nowrap="nowrap">
                        Deposit&nbsp;to&nbsp;its&nbsp;full&nbsp;value&nbsp;(which&nbsp;will&nbsp;be&nbsp;equal&nbsp;to&nbsp;4&nbsp;(four)&nbsp;months’&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_233">
                        233
                      </td>
                      <td nowrap="nowrap">
                        Deposit&nbsp;to&nbsp;its&nbsp;full&nbsp;value&nbsp;(which&nbsp;will&nbsp;be&nbsp;equal&nbsp;to&nbsp;4&nbsp;(four)&nbsp;months’&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_234">
                        234
                      </td>
                      <td nowrap="nowrap">
                        Charge&nbsp;at&nbsp;that&nbsp;time,&nbsp;both&nbsp;increased&nbsp;by&nbsp;relevant&nbsp;VAT,&nbsp;calculated&nbsp;according&nbsp;to&nbsp;the&nbsp;selling&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_234">
                        234
                      </td>
                      <td nowrap="nowrap">
                        Charge&nbsp;at&nbsp;that&nbsp;time,&nbsp;both&nbsp;increased&nbsp;by&nbsp;relevant&nbsp;VAT,&nbsp;calculated&nbsp;according&nbsp;to&nbsp;the&nbsp;selling&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__29">n</a>
                      </td>
                      <td class="diff_header" id="from0_235">
                        235
                      </td>
                      <td nowrap="nowrap">
                        exchange&nbsp;rate&nbsp;of
                        <span class="diff_sub">&nbsp;Zagrebačka</span>
                        &nbsp;__________&nbsp;Banka&nbsp;d.d.&nbsp;for&nbsp;Euros&nbsp;on&nbsp;the&nbsp;date&nbsp;of&nbsp;
                        <span class="diff_chg">___&nbsp;___&nbsp;</span>
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__29">n</a>
                      </td>
                      <td class="diff_header" id="to0_235">
                        235
                      </td>
                      <td nowrap="nowrap">
                        exchange&nbsp;rate&nbsp;of&nbsp;__________&nbsp;
                        <span class="diff_add">Zagrebacka&nbsp;</span>
                        Banka&nbsp;d.d.&nbsp;for&nbsp;Euros&nbsp;on&nbsp;the&nbsp;date&nbsp;of&nbsp;
                        <span class="diff_chg">§4.&nbsp;4.1&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_236">
                        236
                      </td>
                      <td nowrap="nowrap">
                        reinstatement&nbsp;of&nbsp;the&nbsp;deposit),&nbsp;within&nbsp;2&nbsp;(two)&nbsp;weeks.&nbsp;
                        <span class="diff_chg">3.16</span>
                        &nbsp;On&nbsp;or&nbsp;before&nbsp;every&nbsp;March&nbsp;31&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_236">
                        236
                      </td>
                      <td nowrap="nowrap">
                        reinstatement&nbsp;of&nbsp;the&nbsp;deposit),&nbsp;within&nbsp;2&nbsp;(two)&nbsp;weeks.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;On&nbsp;or&nbsp;before&nbsp;every&nbsp;March&nbsp;31&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__29"></td>
                      <td class="diff_header" id="from0_237">
                        237
                      </td>
                      <td nowrap="nowrap">
                        each&nbsp;year&nbsp;of&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;increase&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;bank&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_237">
                        237
                      </td>
                      <td nowrap="nowrap">
                        each&nbsp;year&nbsp;of&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;increase&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;bank&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_238">
                        238
                      </td>
                      <td nowrap="nowrap">
                        guarantee/&nbsp;Deposit&nbsp;to&nbsp;reflect&nbsp;the&nbsp;increase&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;(both&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_238">
                        238
                      </td>
                      <td nowrap="nowrap">
                        guarantee/&nbsp;Deposit&nbsp;to&nbsp;reflect&nbsp;the&nbsp;increase&nbsp;of&nbsp;the&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;(both&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_239">
                        239
                      </td>
                      <td nowrap="nowrap">
                        increased&nbsp;by&nbsp;applicable&nbsp;VAT)&nbsp;as&nbsp;expressed&nbsp;in&nbsp;Euros.&nbsp;The&nbsp;amount&nbsp;of&nbsp;Croatian&nbsp;Kuna&nbsp;payable&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_239">
                        239
                      </td>
                      <td nowrap="nowrap">
                        increased&nbsp;by&nbsp;applicable&nbsp;VAT)&nbsp;as&nbsp;expressed&nbsp;in&nbsp;Euros.&nbsp;The&nbsp;amount&nbsp;of&nbsp;Croatian&nbsp;Kuna&nbsp;payable&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_240">
                        240
                      </td>
                      <td nowrap="nowrap">
                        as&nbsp;the&nbsp;increase&nbsp;of&nbsp;the&nbsp;Deposit&nbsp;shall&nbsp;be&nbsp;calculated&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;selling&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_240">
                        240
                      </td>
                      <td nowrap="nowrap">
                        as&nbsp;the&nbsp;increase&nbsp;of&nbsp;the&nbsp;Deposit&nbsp;shall&nbsp;be&nbsp;calculated&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;selling&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__30">
                        <a href="#difflib_chg_to0__30">n</a>
                      </td>
                      <td class="diff_header" id="from0_241">
                        241
                      </td>
                      <td nowrap="nowrap">
                        exchange&nbsp;rate&nbsp;of
                        <span class="diff_sub">&nbsp;Zagrebačka</span>
                        &nbsp;__________&nbsp;Banka&nbsp;d.d.&nbsp;for&nbsp;Euros&nbsp;on&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;Deposit&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__30">n</a>
                      </td>
                      <td class="diff_header" id="to0_241">
                        241
                      </td>
                      <td nowrap="nowrap">
                        exchange&nbsp;rate&nbsp;of&nbsp;__________&nbsp;
                        <span class="diff_add">Zagrebacka&nbsp;</span>
                        Banka&nbsp;d.d.&nbsp;for&nbsp;Euros&nbsp;on&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;Deposit&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_242">
                        242
                      </td>
                      <td nowrap="nowrap">
                        is&nbsp;increased.&nbsp;If&nbsp;the&nbsp;full&nbsp;amount&nbsp;of&nbsp;the&nbsp;Deposit&nbsp;is&nbsp;not&nbsp;reinstated&nbsp;or&nbsp;increased,&nbsp;then&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_242">
                        242
                      </td>
                      <td nowrap="nowrap">
                        is&nbsp;increased.&nbsp;If&nbsp;the&nbsp;full&nbsp;amount&nbsp;of&nbsp;the&nbsp;Deposit&nbsp;is&nbsp;not&nbsp;reinstated&nbsp;or&nbsp;increased,&nbsp;then&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_243">
                        243
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;may,&nbsp;at&nbsp;its&nbsp;sole&nbsp;discretion,&nbsp;terminate&nbsp;this&nbsp;Lease&nbsp;with&nbsp;immediate&nbsp;effect&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_243">
                        243
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;may,&nbsp;at&nbsp;its&nbsp;sole&nbsp;discretion,&nbsp;terminate&nbsp;this&nbsp;Lease&nbsp;with&nbsp;immediate&nbsp;effect&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_244">
                        244
                      </td>
                      <td nowrap="nowrap">
                        notice,&nbsp;in&nbsp;writing,&nbsp;served&nbsp;on&nbsp;the&nbsp;Tenant.&nbsp;Any&nbsp;delay&nbsp;in&nbsp;exercising&nbsp;this&nbsp;right&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_244">
                        244
                      </td>
                      <td nowrap="nowrap">
                        notice,&nbsp;in&nbsp;writing,&nbsp;served&nbsp;on&nbsp;the&nbsp;Tenant.&nbsp;Any&nbsp;delay&nbsp;in&nbsp;exercising&nbsp;this&nbsp;right&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__31">n</a>
                      </td>
                      <td class="diff_header" id="from0_245">
                        245
                      </td>
                      <td nowrap="nowrap">
                        cancellation&nbsp;shall&nbsp;not&nbsp;give&nbsp;rise&nbsp;to&nbsp;any&nbsp;waiver&nbsp;thereof.&nbsp;
                        <span class="diff_chg">§4.</span>&nbsp;Termination&nbsp;
                        <span class="diff_chg">4.1</span>
                        &nbsp;The&nbsp;Landlord&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__31">n</a>
                      </td>
                      <td class="diff_header" id="to0_245">
                        245
                      </td>
                      <td nowrap="nowrap">
                        cancellation&nbsp;shall&nbsp;not&nbsp;give&nbsp;rise&nbsp;to&nbsp;any&nbsp;waiver&nbsp;thereof.&nbsp;
                        <span class="diff_chg">___</span>&nbsp;Termination&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;The&nbsp;Landlord&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_246">
                        246
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;have&nbsp;the&nbsp;right&nbsp;to&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;if&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;in&nbsp;arrears&nbsp;with&nbsp;the&nbsp;payment&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_246">
                        246
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;have&nbsp;the&nbsp;right&nbsp;to&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;if&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;in&nbsp;arrears&nbsp;with&nbsp;the&nbsp;payment&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_247">
                        247
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;Rent&nbsp;and/or&nbsp;Service&nbsp;Charge&nbsp;and/or&nbsp;any&nbsp;other&nbsp;amounts&nbsp;hereunder.&nbsp;The&nbsp;Landlord&nbsp;is,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_247">
                        247
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;Rent&nbsp;and/or&nbsp;Service&nbsp;Charge&nbsp;and/or&nbsp;any&nbsp;other&nbsp;amounts&nbsp;hereunder.&nbsp;The&nbsp;Landlord&nbsp;is,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_248">
                        248
                      </td>
                      <td nowrap="nowrap">
                        however,&nbsp;obliged&nbsp;to&nbsp;grant&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;in&nbsp;writing,&nbsp;additional&nbsp;term&nbsp;of&nbsp;15&nbsp;(fifteen)&nbsp;days&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_248">
                        248
                      </td>
                      <td nowrap="nowrap">
                        however,&nbsp;obliged&nbsp;to&nbsp;grant&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;in&nbsp;writing,&nbsp;additional&nbsp;term&nbsp;of&nbsp;15&nbsp;(fifteen)&nbsp;days&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__31"></td>
                      <td class="diff_header" id="from0_249">
                        249
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;performance&nbsp;and&nbsp;if&nbsp;even&nbsp;within&nbsp;the&nbsp;additional&nbsp;term&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;settle&nbsp;all&nbsp;due&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_249">
                        249
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;performance&nbsp;and&nbsp;if&nbsp;even&nbsp;within&nbsp;the&nbsp;additional&nbsp;term&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;settle&nbsp;all&nbsp;due&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_250">
                        250
                      </td>
                      <td nowrap="nowrap">
                        unsettled&nbsp;amounts&nbsp;hereunder,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;authorized&nbsp;to&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;and&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_250">
                        250
                      </td>
                      <td nowrap="nowrap">
                        unsettled&nbsp;amounts&nbsp;hereunder,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;authorized&nbsp;to&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;and&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_251">
                        251
                      </td>
                      <td nowrap="nowrap">
                        Services&nbsp;Agreement,&nbsp;with&nbsp;immediate&nbsp;effect,&nbsp;within&nbsp;further&nbsp;8&nbsp;(eight)&nbsp;days.&nbsp;For&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_251">
                        251
                      </td>
                      <td nowrap="nowrap">
                        Services&nbsp;Agreement,&nbsp;with&nbsp;immediate&nbsp;effect,&nbsp;within&nbsp;further&nbsp;8&nbsp;(eight)&nbsp;days.&nbsp;For&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_252">
                        252
                      </td>
                      <td nowrap="nowrap">
                        avoidance&nbsp;of&nbsp;doubt,&nbsp;the&nbsp;Parties&nbsp;agree&nbsp;that&nbsp;possible&nbsp;collection&nbsp;from&nbsp;the&nbsp;Bank&nbsp;Guarantee/&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_252">
                        252
                      </td>
                      <td nowrap="nowrap">
                        avoidance&nbsp;of&nbsp;doubt,&nbsp;the&nbsp;Parties&nbsp;agree&nbsp;that&nbsp;possible&nbsp;collection&nbsp;from&nbsp;the&nbsp;Bank&nbsp;Guarantee/&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__32">n</a>
                      </td>
                      <td class="diff_header" id="from0_253">
                        253
                      </td>
                      <td nowrap="nowrap">
                        Deposit&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;during&nbsp;the&nbsp;said&nbsp;eight-day&nbsp;term&nbsp;
                        <span class="diff_chg">
                          ___&nbsp;___&nbsp;___&nbsp;___
                        </span>
                        &nbsp;shall&nbsp;have&nbsp;no&nbsp;effect&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__32">n</a>
                      </td>
                      <td class="diff_header" id="to0_253">
                        253
                      </td>
                      <td nowrap="nowrap">
                        Deposit&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;during&nbsp;the&nbsp;said&nbsp;eight-day&nbsp;term&nbsp;
                        <span class="diff_chg">
                          4.2&nbsp;4.3&nbsp;4.4&nbsp;4.5
                        </span>
                        &nbsp;shall&nbsp;have&nbsp;no&nbsp;effect&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__32"></td>
                      <td class="diff_header" id="from0_254">
                        254
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;the&nbsp;Landlord’s&nbsp;right&nbsp;to&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;Agreement.&nbsp;
                        <span class="diff_chg">4.2</span>
                        &nbsp;Notwithstanding&nbsp;the&nbsp;above,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_254">
                        254
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;the&nbsp;Landlord’s&nbsp;right&nbsp;to&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;Agreement.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Notwithstanding&nbsp;the&nbsp;above,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_255">
                        255
                      </td>
                      <td nowrap="nowrap">
                        this&nbsp;Lease&nbsp;may&nbsp;also&nbsp;be&nbsp;terminated&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;with&nbsp;immediate&nbsp;effect&nbsp;upon&nbsp;the&nbsp;breach&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_255">
                        255
                      </td>
                      <td nowrap="nowrap">
                        this&nbsp;Lease&nbsp;may&nbsp;also&nbsp;be&nbsp;terminated&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;with&nbsp;immediate&nbsp;effect&nbsp;upon&nbsp;the&nbsp;breach&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_256">
                        256
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;any&nbsp;provisions&nbsp;hereof&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;if&nbsp;such&nbsp;breach&nbsp;is&nbsp;not&nbsp;remedied&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_256">
                        256
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;any&nbsp;provisions&nbsp;hereof&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;if&nbsp;such&nbsp;breach&nbsp;is&nbsp;not&nbsp;remedied&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_257">
                        257
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;14&nbsp;(fourteen)&nbsp;days&nbsp;from&nbsp;the&nbsp;date&nbsp;the&nbsp;Tenant&nbsp;was&nbsp;notified&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;of&nbsp;such&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_257">
                        257
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;14&nbsp;(fourteen)&nbsp;days&nbsp;from&nbsp;the&nbsp;date&nbsp;the&nbsp;Tenant&nbsp;was&nbsp;notified&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;of&nbsp;such&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__33">n</a>
                      </td>
                      <td class="diff_header" id="from0_258">
                        258
                      </td>
                      <td nowrap="nowrap">
                        breach.”&nbsp;<span class="diff_chg">4.3</span>
                        &nbsp;Any&nbsp;notice&nbsp;of&nbsp;termination&nbsp;requires&nbsp;a&nbsp;written&nbsp;form,&nbsp;otherwise&nbsp;it&nbsp;is&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__33">n</a>
                      </td>
                      <td class="diff_header" id="to0_258">
                        258
                      </td>
                      <td nowrap="nowrap">
                        breach.”&nbsp;<span class="diff_chg">___</span>
                        &nbsp;Any&nbsp;notice&nbsp;of&nbsp;termination&nbsp;requires&nbsp;a&nbsp;written&nbsp;form,&nbsp;otherwise&nbsp;it&nbsp;is&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_259">
                        259
                      </td>
                      <td nowrap="nowrap">
                        considered&nbsp;null&nbsp;and&nbsp;void.&nbsp;
                        <span class="diff_chg">4.4</span>
                        &nbsp;Should&nbsp;Tenant&nbsp;fail&nbsp;to&nbsp;vacate&nbsp;or&nbsp;leave&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;or&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_259">
                        259
                      </td>
                      <td nowrap="nowrap">
                        considered&nbsp;null&nbsp;and&nbsp;void.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Should&nbsp;Tenant&nbsp;fail&nbsp;to&nbsp;vacate&nbsp;or&nbsp;leave&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;or&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__33"></td>
                      <td class="diff_header" id="from0_260">
                        260
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;part&nbsp;on&nbsp;the&nbsp;date&nbsp;of&nbsp;termination&nbsp;or&nbsp;expiration&nbsp;of&nbsp;this&nbsp;Agreement,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_260">
                        260
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;part&nbsp;on&nbsp;the&nbsp;date&nbsp;of&nbsp;termination&nbsp;or&nbsp;expiration&nbsp;of&nbsp;this&nbsp;Agreement,&nbsp;the&nbsp;Landlord&nbsp;is&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_261">
                        261
                      </td>
                      <td nowrap="nowrap">
                        entitled&nbsp;to&nbsp;be&nbsp;compensated&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;by&nbsp;the&nbsp;penalty&nbsp;for&nbsp;illegal&nbsp;use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_261">
                        261
                      </td>
                      <td nowrap="nowrap">
                        entitled&nbsp;to&nbsp;be&nbsp;compensated&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;by&nbsp;the&nbsp;penalty&nbsp;for&nbsp;illegal&nbsp;use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_262">
                        262
                      </td>
                      <td nowrap="nowrap">
                        Area&nbsp;equal&nbsp;to&nbsp;300&nbsp;(three&nbsp;hundred)&nbsp;%&nbsp;of&nbsp;the&nbsp;Rent&nbsp;for&nbsp;the&nbsp;Premises&nbsp;plus&nbsp;VAT&nbsp;and&nbsp;average&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_262">
                        262
                      </td>
                      <td nowrap="nowrap">
                        Area&nbsp;equal&nbsp;to&nbsp;300&nbsp;(three&nbsp;hundred)&nbsp;%&nbsp;of&nbsp;the&nbsp;Rent&nbsp;for&nbsp;the&nbsp;Premises&nbsp;plus&nbsp;VAT&nbsp;and&nbsp;average&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_263">
                        263
                      </td>
                      <td nowrap="nowrap">
                        Service&nbsp;Charge&nbsp;due&nbsp;during&nbsp;the&nbsp;last&nbsp;six&nbsp;months&nbsp;of&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease&nbsp;plus&nbsp;VAT,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_263">
                        263
                      </td>
                      <td nowrap="nowrap">
                        Service&nbsp;Charge&nbsp;due&nbsp;during&nbsp;the&nbsp;last&nbsp;six&nbsp;months&nbsp;of&nbsp;the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease&nbsp;plus&nbsp;VAT,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__34">n</a>
                      </td>
                      <td class="diff_header" id="from0_264">
                        264
                      </td>
                      <td nowrap="nowrap">
                        calculated&nbsp;per&nbsp;day&nbsp;of&nbsp;delay.&nbsp;
                        <span class="diff_chg">4.5</span>
                        &nbsp;If&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;becomes&nbsp;unfit&nbsp;for&nbsp;proper&nbsp;use&nbsp;due&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__34">n</a>
                      </td>
                      <td class="diff_header" id="to0_264">
                        264
                      </td>
                      <td nowrap="nowrap">
                        calculated&nbsp;per&nbsp;day&nbsp;of&nbsp;delay.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;If&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;becomes&nbsp;unfit&nbsp;for&nbsp;proper&nbsp;use&nbsp;due&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_265">
                        265
                      </td>
                      <td nowrap="nowrap">
                        serious&nbsp;damage&nbsp;which&nbsp;is&nbsp;not&nbsp;attributable&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;within&nbsp;1&nbsp;(one)&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_265">
                        265
                      </td>
                      <td nowrap="nowrap">
                        serious&nbsp;damage&nbsp;which&nbsp;is&nbsp;not&nbsp;attributable&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;within&nbsp;1&nbsp;(one)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__34"></td>
                      <td class="diff_header" id="from0_266">
                        266
                      </td>
                      <td nowrap="nowrap">
                        month&nbsp;determine&nbsp;at&nbsp;its&nbsp;sole&nbsp;discretion&nbsp;whether&nbsp;to&nbsp;reinstate&nbsp;the&nbsp;Leased&nbsp;Area.&nbsp;If&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_266">
                        266
                      </td>
                      <td nowrap="nowrap">
                        month&nbsp;determine&nbsp;at&nbsp;its&nbsp;sole&nbsp;discretion&nbsp;whether&nbsp;to&nbsp;reinstate&nbsp;the&nbsp;Leased&nbsp;Area.&nbsp;If&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_267">
                        267
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;determines&nbsp;not&nbsp;to&nbsp;reinstate&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;this&nbsp;Agreement&nbsp;shall&nbsp;terminate&nbsp;on&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_267">
                        267
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;determines&nbsp;not&nbsp;to&nbsp;reinstate&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;this&nbsp;Agreement&nbsp;shall&nbsp;terminate&nbsp;on&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_268">
                        268
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;date&nbsp;when&nbsp;the&nbsp;notice&nbsp;on&nbsp;the&nbsp;Landlord's&nbsp;decision&nbsp;is&nbsp;delivered&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;If&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_268">
                        268
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;date&nbsp;when&nbsp;the&nbsp;notice&nbsp;on&nbsp;the&nbsp;Landlord's&nbsp;decision&nbsp;is&nbsp;delivered&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;If&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_269">
                        269
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;determines&nbsp;to&nbsp;reinstate&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;the&nbsp;Lease&nbsp;shall&nbsp;remain&nbsp;in&nbsp;effect.&nbsp;In&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_269">
                        269
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;determines&nbsp;to&nbsp;reinstate&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;the&nbsp;Lease&nbsp;shall&nbsp;remain&nbsp;in&nbsp;effect.&nbsp;In&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__35">n</a>
                      </td>
                      <td class="diff_header" id="from0_270">
                        270
                      </td>
                      <td nowrap="nowrap">
                        such&nbsp;a&nbsp;case&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;entitled&nbsp;to&nbsp;
                        <span class="diff_chg">__&nbsp;____&nbsp;____</span>
                        &nbsp;appropriate&nbsp;reduction&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__35">n</a>
                      </td>
                      <td class="diff_header" id="to0_270">
                        270
                      </td>
                      <td nowrap="nowrap">
                        such&nbsp;a&nbsp;case&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;entitled&nbsp;to&nbsp;
                        <span class="diff_chg">§5&nbsp;5.1.&nbsp;5.2.</span>
                        &nbsp;appropriate&nbsp;reduction&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_271">
                        271
                      </td>
                      <td nowrap="nowrap">
                        Rent&nbsp;for&nbsp;the&nbsp;period&nbsp;of&nbsp;the&nbsp;hindering&nbsp;of&nbsp;the&nbsp;use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;by&nbsp;the&nbsp;reinstatement,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_271">
                        271
                      </td>
                      <td nowrap="nowrap">
                        Rent&nbsp;for&nbsp;the&nbsp;period&nbsp;of&nbsp;the&nbsp;hindering&nbsp;of&nbsp;the&nbsp;use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;by&nbsp;the&nbsp;reinstatement,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_272">
                        272
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;such&nbsp;a&nbsp;manner&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;pay&nbsp;the&nbsp;Rent&nbsp;for&nbsp;the&nbsp;part(s)&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_272">
                        272
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;such&nbsp;a&nbsp;manner&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;pay&nbsp;the&nbsp;Rent&nbsp;for&nbsp;the&nbsp;part(s)&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_273">
                        273
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;that&nbsp;are&nbsp;suitable&nbsp;for&nbsp;use&nbsp;and&nbsp;performance&nbsp;of&nbsp;its&nbsp;business.&nbsp;The&nbsp;amount&nbsp;and&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_273">
                        273
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;that&nbsp;are&nbsp;suitable&nbsp;for&nbsp;use&nbsp;and&nbsp;performance&nbsp;of&nbsp;its&nbsp;business.&nbsp;The&nbsp;amount&nbsp;and&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_274">
                        274
                      </td>
                      <td nowrap="nowrap">
                        term&nbsp;of&nbsp;the&nbsp;Rent&nbsp;reduction&nbsp;shall&nbsp;be&nbsp;agreed&nbsp;between&nbsp;the&nbsp;Parties&nbsp;failing&nbsp;of&nbsp;which&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_274">
                        274
                      </td>
                      <td nowrap="nowrap">
                        term&nbsp;of&nbsp;the&nbsp;Rent&nbsp;reduction&nbsp;shall&nbsp;be&nbsp;agreed&nbsp;between&nbsp;the&nbsp;Parties&nbsp;failing&nbsp;of&nbsp;which&nbsp;the&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__35"></td>
                      <td class="diff_header" id="from0_279">
                        279
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;the&nbsp;agreed&nbsp;time&nbsp;either&nbsp;Party&nbsp;may&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;by&nbsp;a&nbsp;written&nbsp;notice&nbsp;to&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_279">
                        279
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;the&nbsp;agreed&nbsp;time&nbsp;either&nbsp;Party&nbsp;may&nbsp;terminate&nbsp;the&nbsp;Lease&nbsp;by&nbsp;a&nbsp;written&nbsp;notice&nbsp;to&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_280">
                        280
                      </td>
                      <td nowrap="nowrap">
                        other&nbsp;with&nbsp;immediate&nbsp;effect.&nbsp;If&nbsp;the&nbsp;Parties&nbsp;cannot&nbsp;agree&nbsp;on&nbsp;the&nbsp;period&nbsp;of&nbsp;reconstruction&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_280">
                        280
                      </td>
                      <td nowrap="nowrap">
                        other&nbsp;with&nbsp;immediate&nbsp;effect.&nbsp;If&nbsp;the&nbsp;Parties&nbsp;cannot&nbsp;agree&nbsp;on&nbsp;the&nbsp;period&nbsp;of&nbsp;reconstruction&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_281">
                        281
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;3&nbsp;(three)&nbsp;months&nbsp;from&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;damage&nbsp;occurred,&nbsp;the&nbsp;reasonably&nbsp;necessary&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_281">
                        281
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;3&nbsp;(three)&nbsp;months&nbsp;from&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;damage&nbsp;occurred,&nbsp;the&nbsp;reasonably&nbsp;necessary&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__36"></td>
                      <td class="diff_header" id="from0_282">
                        282
                      </td>
                      <td nowrap="nowrap">
                        term&nbsp;of&nbsp;reconstruction&nbsp;shall&nbsp;be&nbsp;determined&nbsp;by&nbsp;the&nbsp;independent&nbsp;expert&nbsp;from&nbsp;the&nbsp;list&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_282">
                        282
                      </td>
                      <td nowrap="nowrap">
                        term&nbsp;of&nbsp;reconstruction&nbsp;shall&nbsp;be&nbsp;determined&nbsp;by&nbsp;the&nbsp;independent&nbsp;expert&nbsp;from&nbsp;the&nbsp;list&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__36">n</a>
                      </td>
                      <td class="diff_header" id="from0_283">
                        283
                      </td>
                      <td nowrap="nowrap">
                        court&nbsp;<span class="diff_sub">–&nbsp;</span>
                        _&nbsp;appointed&nbsp;experts&nbsp;of&nbsp;the&nbsp;County&nbsp;Court&nbsp;in&nbsp;Zagreb,&nbsp;nominated&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__36">n</a>
                      </td>
                      <td class="diff_header" id="to0_283">
                        283
                      </td>
                      <td nowrap="nowrap">
                        court&nbsp;_<span class="diff_add">&nbsp;—</span>
                        &nbsp;appointed&nbsp;experts&nbsp;of&nbsp;the&nbsp;County&nbsp;Court&nbsp;in&nbsp;Zagreb,&nbsp;nominated&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__37"></td>
                      <td class="diff_header" id="from0_284">
                        284
                      </td>
                      <td nowrap="nowrap">
                        ("Expert").&nbsp;The&nbsp;Expert’s&nbsp;finding&nbsp;and&nbsp;opinion&nbsp;on&nbsp;the&nbsp;reasonable&nbsp;necessary&nbsp;term&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_284">
                        284
                      </td>
                      <td nowrap="nowrap">
                        ("Expert").&nbsp;The&nbsp;Expert’s&nbsp;finding&nbsp;and&nbsp;opinion&nbsp;on&nbsp;the&nbsp;reasonable&nbsp;necessary&nbsp;term&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_285">
                        285
                      </td>
                      <td nowrap="nowrap">
                        reconstruction&nbsp;shall&nbsp;be&nbsp;conclusive&nbsp;and&nbsp;binding&nbsp;on&nbsp;the&nbsp;parties&nbsp;except&nbsp;for&nbsp;a&nbsp;manifest&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_285">
                        285
                      </td>
                      <td nowrap="nowrap">
                        reconstruction&nbsp;shall&nbsp;be&nbsp;conclusive&nbsp;and&nbsp;binding&nbsp;on&nbsp;the&nbsp;parties&nbsp;except&nbsp;for&nbsp;a&nbsp;manifest&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__37">n</a>
                      </td>
                      <td class="diff_header" id="from0_286">
                        286
                      </td>
                      <td nowrap="nowrap">
                        error.&nbsp;<span class="diff_chg">§5</span>
                        &nbsp;Rent&nbsp;<span class="diff_chg">5.1.</span>
                        &nbsp;Not&nbsp;applicable.&nbsp;
                        <span class="diff_chg">5.2.</span>
                        &nbsp;The&nbsp;monthly&nbsp;rent&nbsp;(the&nbsp;"Rent")&nbsp;shall&nbsp;be&nbsp;paid&nbsp;in&nbsp;a&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__37">n</a>
                      </td>
                      <td class="diff_header" id="to0_286">
                        286
                      </td>
                      <td nowrap="nowrap">
                        error.&nbsp;<span class="diff_chg">__</span>
                        &nbsp;Rent&nbsp;<span class="diff_chg">____</span>
                        &nbsp;Not&nbsp;applicable.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;The&nbsp;monthly&nbsp;rent&nbsp;(the&nbsp;"Rent")&nbsp;shall&nbsp;be&nbsp;paid&nbsp;in&nbsp;a&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_287">
                        287
                      </td>
                      <td nowrap="nowrap">
                        Croatian&nbsp;Kuna&nbsp;equivalent&nbsp;calculated&nbsp;according&nbsp;to&nbsp;the&nbsp;middle&nbsp;foreign&nbsp;exchange&nbsp;rate&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_287">
                        287
                      </td>
                      <td nowrap="nowrap">
                        Croatian&nbsp;Kuna&nbsp;equivalent&nbsp;calculated&nbsp;according&nbsp;to&nbsp;the&nbsp;middle&nbsp;foreign&nbsp;exchange&nbsp;rate&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__38">
                        <a href="#difflib_chg_to0__38">n</a>
                      </td>
                      <td class="diff_header" id="from0_288">
                        288
                      </td>
                      <td nowrap="nowrap">
                        Croatian&nbsp;National&nbsp;Bank&nbsp;as&nbsp;of&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;
                        <span class="diff_chg">___&nbsp;____</span>
                        &nbsp;invoice&nbsp;is&nbsp;issued.&nbsp;Calculating&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__38">n</a>
                      </td>
                      <td class="diff_header" id="to0_288">
                        288
                      </td>
                      <td nowrap="nowrap">
                        Croatian&nbsp;National&nbsp;Bank&nbsp;as&nbsp;of&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;
                        <span class="diff_chg">5.3&nbsp;5.4.</span>
                        &nbsp;invoice&nbsp;is&nbsp;issued.&nbsp;Calculating&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_289">
                        289
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent,&nbsp;a&nbsp;eleven&nbsp;point&nbsp;six&nbsp;per&nbsp;cent&nbsp;(11.6%)&nbsp;(floors&nbsp;4-9)&nbsp;add-on&nbsp;factor&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_289">
                        289
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent,&nbsp;a&nbsp;eleven&nbsp;point&nbsp;six&nbsp;per&nbsp;cent&nbsp;(11.6%)&nbsp;(floors&nbsp;4-9)&nbsp;add-on&nbsp;factor&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_290">
                        290
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;added&nbsp;for&nbsp;the&nbsp;use&nbsp;the&nbsp;proportionate&nbsp;part&nbsp;of&nbsp;the&nbsp;Common&nbsp;Parts&nbsp;of&nbsp;the&nbsp;Building,&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_290">
                        290
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;added&nbsp;for&nbsp;the&nbsp;use&nbsp;the&nbsp;proportionate&nbsp;part&nbsp;of&nbsp;the&nbsp;Common&nbsp;Parts&nbsp;of&nbsp;the&nbsp;Building,&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__39"></td>
                      <td class="diff_header" id="from0_291">
                        291
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Net&nbsp;Exclusively&nbsp;Useable&nbsp;Office&nbsp;Area,&nbsp;and&nbsp;consequently&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;Rent&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_291">
                        291
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Net&nbsp;Exclusively&nbsp;Useable&nbsp;Office&nbsp;Area,&nbsp;and&nbsp;consequently&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;Rent&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__39">n</a>
                      </td>
                      <td class="diff_header" id="from0_292">
                        292
                      </td>
                      <td nowrap="nowrap">
                        approx.&nbsp;187.37&nbsp;
                        <span class="diff_sub">m2&nbsp;</span>
                        __&nbsp;(one&nbsp;hundred&nbsp;and&nbsp;eighty&nbsp;seven&nbsp;point&nbsp;thirty&nbsp;seven&nbsp;square&nbsp;meters)&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__39">n</a>
                      </td>
                      <td class="diff_header" id="to0_292">
                        292
                      </td>
                      <td nowrap="nowrap">
                        approx.&nbsp;187.37&nbsp;__
                        <span class="diff_add">&nbsp;m?</span>
                        &nbsp;(one&nbsp;hundred&nbsp;and&nbsp;eighty&nbsp;seven&nbsp;point&nbsp;thirty&nbsp;seven&nbsp;square&nbsp;meters)&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_293">
                        293
                      </td>
                      <td nowrap="nowrap">
                        office&nbsp;Premises.&nbsp;The&nbsp;monthly&nbsp;rates&nbsp;are&nbsp;the&nbsp;following:&nbsp;5.2.1&nbsp;12&nbsp;EUR&nbsp;(twelve&nbsp;euro)&nbsp;for&nbsp;each&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_293">
                        293
                      </td>
                      <td nowrap="nowrap">
                        office&nbsp;Premises.&nbsp;The&nbsp;monthly&nbsp;rates&nbsp;are&nbsp;the&nbsp;following:&nbsp;5.2.1&nbsp;12&nbsp;EUR&nbsp;(twelve&nbsp;euro)&nbsp;for&nbsp;each&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_294">
                        294
                      </td>
                      <td nowrap="nowrap">
                        square&nbsp;meter&nbsp;of&nbsp;the&nbsp;Premises&nbsp;for&nbsp;the&nbsp;Gross&nbsp;Office&nbsp;Area,&nbsp;5.2.2&nbsp;55&nbsp;EUR&nbsp;(sixty&nbsp;five&nbsp;euro)&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_294">
                        294
                      </td>
                      <td nowrap="nowrap">
                        square&nbsp;meter&nbsp;of&nbsp;the&nbsp;Premises&nbsp;for&nbsp;the&nbsp;Gross&nbsp;Office&nbsp;Area,&nbsp;5.2.2&nbsp;55&nbsp;EUR&nbsp;(sixty&nbsp;five&nbsp;euro)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__40">n</a>
                      </td>
                      <td class="diff_header" id="from0_295">
                        295
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;each&nbsp;Parking&nbsp;Place&nbsp;(if&nbsp;applicable).&nbsp;
                        <span class="diff_chg">5.3</span>
                        &nbsp;The&nbsp;Landlord&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;hereby&nbsp;agree&nbsp;that&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__40">n</a>
                      </td>
                      <td class="diff_header" id="to0_295">
                        295
                      </td>
                      <td nowrap="nowrap">
                        for&nbsp;each&nbsp;Parking&nbsp;Place&nbsp;(if&nbsp;applicable).&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;The&nbsp;Landlord&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;hereby&nbsp;agree&nbsp;that&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_296">
                        296
                      </td>
                      <td nowrap="nowrap">
                        as&nbsp;of&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;Croatian&nbsp;Kuna&nbsp;ceases&nbsp;to&nbsp;be&nbsp;used&nbsp;as&nbsp;a&nbsp;legal&nbsp;unit&nbsp;of&nbsp;currency&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_296">
                        296
                      </td>
                      <td nowrap="nowrap">
                        as&nbsp;of&nbsp;the&nbsp;date&nbsp;when&nbsp;the&nbsp;Croatian&nbsp;Kuna&nbsp;ceases&nbsp;to&nbsp;be&nbsp;used&nbsp;as&nbsp;a&nbsp;legal&nbsp;unit&nbsp;of&nbsp;currency&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_297">
                        297
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Republic&nbsp;of&nbsp;Croatia&nbsp;all&nbsp;amounts&nbsp;referred&nbsp;to&nbsp;in&nbsp;this&nbsp;Lease&nbsp;shall&nbsp;be&nbsp;payable&nbsp;in&nbsp;EUR,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_297">
                        297
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Republic&nbsp;of&nbsp;Croatia&nbsp;all&nbsp;amounts&nbsp;referred&nbsp;to&nbsp;in&nbsp;this&nbsp;Lease&nbsp;shall&nbsp;be&nbsp;payable&nbsp;in&nbsp;EUR,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_298">
                        298
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;all&nbsp;Croatian&nbsp;Kuna&nbsp;amounts&nbsp;referred&nbsp;to&nbsp;in&nbsp;this&nbsp;Lease&nbsp;(if&nbsp;any)&nbsp;be&nbsp;converted&nbsp;at&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_298">
                        298
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;all&nbsp;Croatian&nbsp;Kuna&nbsp;amounts&nbsp;referred&nbsp;to&nbsp;in&nbsp;this&nbsp;Lease&nbsp;(if&nbsp;any)&nbsp;be&nbsp;converted&nbsp;at&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_299">
                        299
                      </td>
                      <td nowrap="nowrap">
                        official&nbsp;conversion&nbsp;rate&nbsp;the&nbsp;European&nbsp;Union&nbsp;may&nbsp;adopt&nbsp;as&nbsp;the&nbsp;official&nbsp;conversion&nbsp;rate&nbsp;at&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_299">
                        299
                      </td>
                      <td nowrap="nowrap">
                        official&nbsp;conversion&nbsp;rate&nbsp;the&nbsp;European&nbsp;Union&nbsp;may&nbsp;adopt&nbsp;as&nbsp;the&nbsp;official&nbsp;conversion&nbsp;rate&nbsp;at&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__40"></td>
                      <td class="diff_header" id="from0_300">
                        300
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;day&nbsp;of&nbsp;the&nbsp;Croatian&nbsp;Kuna&nbsp;ceasing&nbsp;to&nbsp;be&nbsp;the&nbsp;legal&nbsp;unit&nbsp;of&nbsp;currency&nbsp;in&nbsp;the&nbsp;Republic&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_300">
                        300
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;day&nbsp;of&nbsp;the&nbsp;Croatian&nbsp;Kuna&nbsp;ceasing&nbsp;to&nbsp;be&nbsp;the&nbsp;legal&nbsp;unit&nbsp;of&nbsp;currency&nbsp;in&nbsp;the&nbsp;Republic&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_301">
                        301
                      </td>
                      <td nowrap="nowrap">
                        Croatia.&nbsp;The&nbsp;above&nbsp;rates&nbsp;are&nbsp;exclusive&nbsp;of&nbsp;VAT.&nbsp;The&nbsp;Parties&nbsp;acknowledge&nbsp;that&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_301">
                        301
                      </td>
                      <td nowrap="nowrap">
                        Croatia.&nbsp;The&nbsp;above&nbsp;rates&nbsp;are&nbsp;exclusive&nbsp;of&nbsp;VAT.&nbsp;The&nbsp;Parties&nbsp;acknowledge&nbsp;that&nbsp;the&nbsp;Landlord&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_302">
                        302
                      </td>
                      <td nowrap="nowrap">
                        exercised&nbsp;its&nbsp;option&nbsp;under&nbsp;the&nbsp;VAT&nbsp;Act&nbsp;to&nbsp;charge&nbsp;VAT&nbsp;on&nbsp;its&nbsp;income&nbsp;generated&nbsp;from&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_302">
                        302
                      </td>
                      <td nowrap="nowrap">
                        exercised&nbsp;its&nbsp;option&nbsp;under&nbsp;the&nbsp;VAT&nbsp;Act&nbsp;to&nbsp;charge&nbsp;VAT&nbsp;on&nbsp;its&nbsp;income&nbsp;generated&nbsp;from&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_303">
                        303
                      </td>
                      <td nowrap="nowrap">
                        letting&nbsp;of&nbsp;the&nbsp;Building,&nbsp;and&nbsp;accordingly&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;VAT&nbsp;on&nbsp;the&nbsp;above&nbsp;rates&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_303">
                        303
                      </td>
                      <td nowrap="nowrap">
                        letting&nbsp;of&nbsp;the&nbsp;Building,&nbsp;and&nbsp;accordingly&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;VAT&nbsp;on&nbsp;the&nbsp;above&nbsp;rates&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__41">n</a>
                      </td>
                      <td class="diff_header" id="from0_304">
                        304
                      </td>
                      <td nowrap="nowrap">
                        pursuant&nbsp;to&nbsp;Croatian&nbsp;law.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;The&nbsp;Rent&nbsp;shall&nbsp;be&nbsp;increased&nbsp;in&nbsp;line&nbsp;with&nbsp;the&nbsp;changes&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__41">n</a>
                      </td>
                      <td class="diff_header" id="to0_304">
                        304
                      </td>
                      <td nowrap="nowrap">
                        pursuant&nbsp;to&nbsp;Croatian&nbsp;law.&nbsp;
                        <span class="diff_chg">5.5.</span>
                        &nbsp;The&nbsp;Rent&nbsp;shall&nbsp;be&nbsp;increased&nbsp;in&nbsp;line&nbsp;with&nbsp;the&nbsp;changes&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_305">
                        305
                      </td>
                      <td nowrap="nowrap">
                        Consumer&nbsp;Price&nbsp;Index&nbsp;for&nbsp;Harmonized&nbsp;Indices&nbsp;of&nbsp;Consumer&nbsp;Prices&nbsp;("HICPs,&nbsp;
                        <span class="diff_chg">euro-zon</span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_305">
                        305
                      </td>
                      <td nowrap="nowrap">
                        Consumer&nbsp;Price&nbsp;Index&nbsp;for&nbsp;Harmonized&nbsp;Indices&nbsp;of&nbsp;Consumer&nbsp;Prices&nbsp;("HICPs,&nbsp;
                        <span class="diff_chg">________</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_306">
                        306
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_sub">e-Economic&nbsp;</span>
                        __________&nbsp;<span class="diff_chg">________</span>
                        &nbsp;and&nbsp;Monetary&nbsp;Union/for&nbsp;euro&nbsp;zone&nbsp;only"&nbsp;the&nbsp;"Index").&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_306">
                        306
                      </td>
                      <td nowrap="nowrap">
                        __________&nbsp;
                        <span class="diff_chg">euro-zone-&nbsp;Economic</span>
                        &nbsp;and&nbsp;Monetary&nbsp;Union/for&nbsp;euro&nbsp;zone&nbsp;only"&nbsp;the&nbsp;"Index").&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_307">
                        307
                      </td>
                      <td nowrap="nowrap">
                        first&nbsp;indexation&nbsp;will&nbsp;occur&nbsp;on&nbsp;
                        <span class="diff_sub">1st&nbsp;</span>
                        __&nbsp;of&nbsp;January&nbsp;following&nbsp;the&nbsp;Commencement&nbsp;date.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_307">
                        307
                      </td>
                      <td nowrap="nowrap">
                        first&nbsp;indexation&nbsp;will&nbsp;occur&nbsp;on&nbsp;__
                        <span class="diff_add">_&nbsp;1*</span>
                        &nbsp;of&nbsp;January&nbsp;following&nbsp;the&nbsp;Commencement&nbsp;date.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__41"></td>
                      <td class="diff_header" id="from0_308">
                        308
                      </td>
                      <td nowrap="nowrap">
                        Following&nbsp;indexations&nbsp;will&nbsp;always&nbsp;take&nbsp;place&nbsp;on&nbsp;each&nbsp;
                        <span class="diff_sub">1st&nbsp;</span>
                        ___&nbsp;of&nbsp;January&nbsp;of&nbsp;forthcoming&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_308">
                        308
                      </td>
                      <td nowrap="nowrap">
                        Following&nbsp;indexations&nbsp;will&nbsp;always&nbsp;take&nbsp;place&nbsp;on&nbsp;each&nbsp;___&nbsp;
                        <span class="diff_add">ist&nbsp;</span>
                        of&nbsp;January&nbsp;of&nbsp;forthcoming&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_309">
                        309
                      </td>
                      <td nowrap="nowrap">
                        years&nbsp;until&nbsp;the&nbsp;end&nbsp;of&nbsp;the&nbsp;Lease&nbsp;Term.&nbsp;The&nbsp;Indexations&nbsp;will&nbsp;be&nbsp;calculated&nbsp;in&nbsp;accordance&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_309">
                        309
                      </td>
                      <td nowrap="nowrap">
                        years&nbsp;until&nbsp;the&nbsp;end&nbsp;of&nbsp;the&nbsp;Lease&nbsp;Term.&nbsp;The&nbsp;Indexations&nbsp;will&nbsp;be&nbsp;calculated&nbsp;in&nbsp;accordance&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_310">
                        310
                      </td>
                      <td nowrap="nowrap">
                        with&nbsp;the&nbsp;following&nbsp;Formula:&nbsp;The&nbsp;adjusted&nbsp;Rent&nbsp;rates&nbsp;=&nbsp;(Yx/Yo)&nbsp;*&nbsp;Ro&nbsp;Where:&nbsp;Yo&nbsp;(“Base&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_310">
                        310
                      </td>
                      <td nowrap="nowrap">
                        with&nbsp;the&nbsp;following&nbsp;Formula:&nbsp;The&nbsp;adjusted&nbsp;Rent&nbsp;rates&nbsp;=&nbsp;(Yx/Yo)&nbsp;*&nbsp;Ro&nbsp;Where:&nbsp;Yo&nbsp;(“Base&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_311">
                        311
                      </td>
                      <td nowrap="nowrap">
                        Index”)&nbsp;is&nbsp;the&nbsp;last&nbsp;known&nbsp;Index&nbsp;at&nbsp;the&nbsp;date&nbsp;of&nbsp;signing&nbsp;of&nbsp;this&nbsp;Lease;&nbsp;Ro&nbsp;is&nbsp;the&nbsp;Rent&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_311">
                        311
                      </td>
                      <td nowrap="nowrap">
                        Index”)&nbsp;is&nbsp;the&nbsp;last&nbsp;known&nbsp;Index&nbsp;at&nbsp;the&nbsp;date&nbsp;of&nbsp;signing&nbsp;of&nbsp;this&nbsp;Lease;&nbsp;Ro&nbsp;is&nbsp;the&nbsp;Rent&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__42">n</a>
                      </td>
                      <td class="diff_header" id="from0_312">
                        312
                      </td>
                      <td nowrap="nowrap">
                        value&nbsp;set&nbsp;in&nbsp;article&nbsp;1.1&nbsp;above;&nbsp;Yx&nbsp;is&nbsp;the&nbsp;last&nbsp;known&nbsp;index&nbsp;on&nbsp;the&nbsp;
                        <span class="diff_sub">1st&nbsp;</span>
                        __&nbsp;January&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__42">n</a>
                      </td>
                      <td class="diff_header" id="to0_312">
                        312
                      </td>
                      <td nowrap="nowrap">
                        value&nbsp;set&nbsp;in&nbsp;article&nbsp;1.1&nbsp;above;&nbsp;Yx&nbsp;is&nbsp;the&nbsp;last&nbsp;known&nbsp;index&nbsp;on&nbsp;the&nbsp;__
                        <span class="diff_add">_&nbsp;1*</span>
                        &nbsp;January&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__42"></td>
                      <td class="diff_header" id="from0_313">
                        313
                      </td>
                      <td nowrap="nowrap">
                        calendar&nbsp;year&nbsp;of&nbsp;indexation&nbsp;which&nbsp;shall&nbsp;be&nbsp;used&nbsp;only&nbsp;in&nbsp;those&nbsp;cases&nbsp;when&nbsp;Yx&nbsp;is&nbsp;higher&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_313">
                        313
                      </td>
                      <td nowrap="nowrap">
                        calendar&nbsp;year&nbsp;of&nbsp;indexation&nbsp;which&nbsp;shall&nbsp;be&nbsp;used&nbsp;only&nbsp;in&nbsp;those&nbsp;cases&nbsp;when&nbsp;Yx&nbsp;is&nbsp;higher&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_314">
                        314
                      </td>
                      <td nowrap="nowrap">
                        than&nbsp;Yo.&nbsp;Such&nbsp;adjusted&nbsp;Rent&nbsp;shall&nbsp;become&nbsp;the&nbsp;“Rent”&nbsp;for&nbsp;the&nbsp;purpose&nbsp;of&nbsp;this&nbsp;Lease.&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_314">
                        314
                      </td>
                      <td nowrap="nowrap">
                        than&nbsp;Yo.&nbsp;Such&nbsp;adjusted&nbsp;Rent&nbsp;shall&nbsp;become&nbsp;the&nbsp;“Rent”&nbsp;for&nbsp;the&nbsp;purpose&nbsp;of&nbsp;this&nbsp;Lease.&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_315">
                        315
                      </td>
                      <td nowrap="nowrap">
                        Parties&nbsp;determine&nbsp;that&nbsp;if&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;or&nbsp;any&nbsp;financial&nbsp;obligation&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_315">
                        315
                      </td>
                      <td nowrap="nowrap">
                        Parties&nbsp;determine&nbsp;that&nbsp;if&nbsp;the&nbsp;amount&nbsp;of&nbsp;the&nbsp;Rent&nbsp;or&nbsp;any&nbsp;financial&nbsp;obligation&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_316">
                        316
                      </td>
                      <td nowrap="nowrap">
                        Tenant,&nbsp;after&nbsp;applying&nbsp;the&nbsp;rules&nbsp;on&nbsp;indexation&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;Lease,&nbsp;would&nbsp;be&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_316">
                        316
                      </td>
                      <td nowrap="nowrap">
                        Tenant,&nbsp;after&nbsp;applying&nbsp;the&nbsp;rules&nbsp;on&nbsp;indexation&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;Lease,&nbsp;would&nbsp;be&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__43">
                        <a href="#difflib_chg_to0__43">n</a>
                      </td>
                      <td class="diff_header" id="from0_317">
                        317
                      </td>
                      <td nowrap="nowrap">
                        lower&nbsp;than&nbsp;previously&nbsp;determined&nbsp;amount&nbsp;(prior&nbsp;to&nbsp;indexation),&nbsp;such&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;indexed&nbsp;Rent&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__43">n</a>
                      </td>
                      <td class="diff_header" id="to0_317">
                        317
                      </td>
                      <td nowrap="nowrap">
                        lower&nbsp;than&nbsp;previously&nbsp;determined&nbsp;amount&nbsp;(prior&nbsp;to&nbsp;indexation),&nbsp;such&nbsp;
                        <span class="diff_chg">§6.</span>
                        &nbsp;indexed&nbsp;Rent&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_318">
                        318
                      </td>
                      <td nowrap="nowrap">
                        and/or&nbsp;other&nbsp;financial&nbsp;obligation&nbsp;is&nbsp;not&nbsp;applicable.&nbsp;The&nbsp;Parties&nbsp;hereby&nbsp;mutually&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_318">
                        318
                      </td>
                      <td nowrap="nowrap">
                        and/or&nbsp;other&nbsp;financial&nbsp;obligation&nbsp;is&nbsp;not&nbsp;applicable.&nbsp;The&nbsp;Parties&nbsp;hereby&nbsp;mutually&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_319">
                        319
                      </td>
                      <td nowrap="nowrap">
                        determine&nbsp;that&nbsp;the&nbsp;indexation&nbsp;from&nbsp;the&nbsp;Lease&nbsp;applies&nbsp;accordingly&nbsp;on&nbsp;the&nbsp;eventual&nbsp;storage&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_319">
                        319
                      </td>
                      <td nowrap="nowrap">
                        determine&nbsp;that&nbsp;the&nbsp;indexation&nbsp;from&nbsp;the&nbsp;Lease&nbsp;applies&nbsp;accordingly&nbsp;on&nbsp;the&nbsp;eventual&nbsp;storage&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_320">
                        320
                      </td>
                      <td nowrap="nowrap">
                        space,&nbsp;parking&nbsp;places,&nbsp;advertising&nbsp;spaces&nbsp;and&nbsp;all&nbsp;financial&nbsp;obligations&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_320">
                        320
                      </td>
                      <td nowrap="nowrap">
                        space,&nbsp;parking&nbsp;places,&nbsp;advertising&nbsp;spaces&nbsp;and&nbsp;all&nbsp;financial&nbsp;obligations&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__44">
                        <a href="#difflib_chg_to0__44">n</a>
                      </td>
                      <td class="diff_header" id="from0_321">
                        321
                      </td>
                      <td nowrap="nowrap">
                        (except&nbsp;the&nbsp;Service&nbsp;Charge)&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;provisions&nbsp;hereof.&nbsp;
                        <span class="diff_chg">§6.</span>&nbsp;Services&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__44">n</a>
                      </td>
                      <td class="diff_header" id="to0_321">
                        321
                      </td>
                      <td nowrap="nowrap">
                        (except&nbsp;the&nbsp;Service&nbsp;Charge)&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;provisions&nbsp;hereof.&nbsp;
                        <span class="diff_chg">___</span>&nbsp;Services&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_322">
                        322
                      </td>
                      <td nowrap="nowrap">
                        Agreement&nbsp;<span class="diff_chg">___</span>
                        &nbsp;By&nbsp;entering&nbsp;into&nbsp;this&nbsp;Agreement,&nbsp;the&nbsp;Parties&nbsp;also&nbsp;enter&nbsp;into&nbsp;a&nbsp;Service&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_322">
                        322
                      </td>
                      <td nowrap="nowrap">
                        Agreement&nbsp;<span class="diff_chg">6.1</span>
                        &nbsp;By&nbsp;entering&nbsp;into&nbsp;this&nbsp;Agreement,&nbsp;the&nbsp;Parties&nbsp;also&nbsp;enter&nbsp;into&nbsp;a&nbsp;Service&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__45"></td>
                      <td class="diff_header" id="from0_323">
                        323
                      </td>
                      <td nowrap="nowrap">
                        Agreement,&nbsp;which&nbsp;will&nbsp;be&nbsp;effective&nbsp;and&nbsp;commence&nbsp;on&nbsp;Commencement&nbsp;Date&nbsp;describing&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_323">
                        323
                      </td>
                      <td nowrap="nowrap">
                        Agreement,&nbsp;which&nbsp;will&nbsp;be&nbsp;effective&nbsp;and&nbsp;commence&nbsp;on&nbsp;Commencement&nbsp;Date&nbsp;describing&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_324">
                        324
                      </td>
                      <td nowrap="nowrap">
                        terms,&nbsp;conditions&nbsp;and&nbsp;provisions&nbsp;pertaining&nbsp;to&nbsp;the&nbsp;management&nbsp;and&nbsp;operation&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_324">
                        324
                      </td>
                      <td nowrap="nowrap">
                        terms,&nbsp;conditions&nbsp;and&nbsp;provisions&nbsp;pertaining&nbsp;to&nbsp;the&nbsp;management&nbsp;and&nbsp;operation&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__45">n</a>
                      </td>
                      <td class="diff_header" id="from0_325">
                        325
                      </td>
                      <td nowrap="nowrap">
                        Building/&nbsp;<span class="diff_chg">_</span>
                        &nbsp;Site.&nbsp;The&nbsp;Service&nbsp;Agreement&nbsp;constitutes&nbsp;Exhibit&nbsp;#6&nbsp;to&nbsp;the&nbsp;Lease&nbsp;Agreement.&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__45">n</a>
                      </td>
                      <td class="diff_header" id="to0_325">
                        325
                      </td>
                      <td nowrap="nowrap">
                        Building/&nbsp;<span class="diff_chg">—</span>
                        &nbsp;Site.&nbsp;The&nbsp;Service&nbsp;Agreement&nbsp;constitutes&nbsp;Exhibit&nbsp;#6&nbsp;to&nbsp;the&nbsp;Lease&nbsp;Agreement.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__46"></td>
                      <td class="diff_header" id="from0_326">
                        326
                      </td>
                      <td nowrap="nowrap">
                        Based&nbsp;on&nbsp;the&nbsp;Service&nbsp;Agreement&nbsp;the&nbsp;monthly&nbsp;Service&nbsp;Charge&nbsp;(or&nbsp;further&nbsp;as:&nbsp;Additional&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_326">
                        326
                      </td>
                      <td nowrap="nowrap">
                        Based&nbsp;on&nbsp;the&nbsp;Service&nbsp;Agreement&nbsp;the&nbsp;monthly&nbsp;Service&nbsp;Charge&nbsp;(or&nbsp;further&nbsp;as:&nbsp;Additional&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__46">n</a>
                      </td>
                      <td class="diff_header" id="from0_327">
                        327
                      </td>
                      <td nowrap="nowrap">
                        rent)&nbsp;amount&nbsp;is&nbsp;4,2
                        <span class="diff_sub">&nbsp;EUR/m2</span>
                        &nbsp;______&nbsp;(four&nbsp;euro&nbsp;and&nbsp;twenty&nbsp;cents)&nbsp;from&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__46">n</a>
                      </td>
                      <td class="diff_header" id="to0_327">
                        327
                      </td>
                      <td nowrap="nowrap">
                        rent)&nbsp;amount&nbsp;is&nbsp;4,2&nbsp;______&nbsp;
                        <span class="diff_add">EUR/m?&nbsp;</span>
                        (four&nbsp;euro&nbsp;and&nbsp;twenty&nbsp;cents)&nbsp;from&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_328">
                        328
                      </td>
                      <td nowrap="nowrap">
                        until&nbsp;the&nbsp;Termination&nbsp;of&nbsp;the&nbsp;Lease&nbsp;for&nbsp;the&nbsp;Gross&nbsp;Office&nbsp;Area.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Parties&nbsp;shall&nbsp;comply&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_328">
                        328
                      </td>
                      <td nowrap="nowrap">
                        until&nbsp;the&nbsp;Termination&nbsp;of&nbsp;the&nbsp;Lease&nbsp;for&nbsp;the&nbsp;Gross&nbsp;Office&nbsp;Area.&nbsp;
                        <span class="diff_chg">6.2</span>
                        &nbsp;Parties&nbsp;shall&nbsp;comply&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__47"></td>
                      <td class="diff_header" id="from0_329">
                        329
                      </td>
                      <td nowrap="nowrap">
                        with&nbsp;all&nbsp;provisions&nbsp;of&nbsp;the&nbsp;Service&nbsp;Agreement&nbsp;pertaining&nbsp;inter&nbsp;alia&nbsp;to&nbsp;the&nbsp;payments,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_329">
                        329
                      </td>
                      <td nowrap="nowrap">
                        with&nbsp;all&nbsp;provisions&nbsp;of&nbsp;the&nbsp;Service&nbsp;Agreement&nbsp;pertaining&nbsp;inter&nbsp;alia&nbsp;to&nbsp;the&nbsp;payments,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__47">n</a>
                      </td>
                      <td class="diff_header" id="from0_330">
                        330
                      </td>
                      <td nowrap="nowrap">
                        termination&nbsp;and&nbsp;the&nbsp;breach&nbsp;of&nbsp;such&nbsp;Agreement.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;Termination&nbsp;of&nbsp;this&nbsp;Agreement&nbsp;shall&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__47">n</a>
                      </td>
                      <td class="diff_header" id="to0_330">
                        330
                      </td>
                      <td nowrap="nowrap">
                        termination&nbsp;and&nbsp;the&nbsp;breach&nbsp;of&nbsp;such&nbsp;Agreement.&nbsp;
                        <span class="diff_chg">6.3.</span>
                        &nbsp;Termination&nbsp;of&nbsp;this&nbsp;Agreement&nbsp;shall&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_331">
                        331
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">___</span>
                        &nbsp;result&nbsp;automatically&nbsp;in&nbsp;termination&nbsp;of&nbsp;the&nbsp;Service&nbsp;Agreement&nbsp;and&nbsp;in&nbsp;the&nbsp;event&nbsp;that&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_331">
                        331
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">87.</span>
                        &nbsp;result&nbsp;automatically&nbsp;in&nbsp;termination&nbsp;of&nbsp;the&nbsp;Service&nbsp;Agreement&nbsp;and&nbsp;in&nbsp;the&nbsp;event&nbsp;that&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_332">
                        332
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Service&nbsp;Agreement&nbsp;shall&nbsp;terminate,&nbsp;this&nbsp;Agreement&nbsp;shall&nbsp;also&nbsp;automatically&nbsp;terminate.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_332">
                        332
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Service&nbsp;Agreement&nbsp;shall&nbsp;terminate,&nbsp;this&nbsp;Agreement&nbsp;shall&nbsp;also&nbsp;automatically&nbsp;terminate.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__48">
                        <a href="#difflib_chg_to0__48">n</a>
                      </td>
                      <td class="diff_header" id="from0_333">
                        333
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">§7.</span>&nbsp;Payments&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;The&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;(as&nbsp;defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__48">n</a>
                      </td>
                      <td class="diff_header" id="to0_333">
                        333
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">___</span>&nbsp;Payments&nbsp;
                        <span class="diff_chg">7.1</span>
                        &nbsp;The&nbsp;Rent&nbsp;and&nbsp;the&nbsp;Service&nbsp;Charge&nbsp;(as&nbsp;defined&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement)&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_334">
                        334
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;payable&nbsp;from&nbsp;the&nbsp;Commencement&nbsp;Date,&nbsp;monthly,&nbsp;at&nbsp;the&nbsp;beginning&nbsp;of&nbsp;the&nbsp;month,&nbsp;not&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_334">
                        334
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;payable&nbsp;from&nbsp;the&nbsp;Commencement&nbsp;Date,&nbsp;monthly,&nbsp;at&nbsp;the&nbsp;beginning&nbsp;of&nbsp;the&nbsp;month,&nbsp;not&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_335">
                        335
                      </td>
                      <td nowrap="nowrap">
                        later&nbsp;than&nbsp;within&nbsp;14&nbsp;(fourteen)&nbsp;days&nbsp;from&nbsp;the&nbsp;date&nbsp;of&nbsp;duly&nbsp;issued&nbsp;invoice&nbsp;stating&nbsp;all&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_335">
                        335
                      </td>
                      <td nowrap="nowrap">
                        later&nbsp;than&nbsp;within&nbsp;14&nbsp;(fourteen)&nbsp;days&nbsp;from&nbsp;the&nbsp;date&nbsp;of&nbsp;duly&nbsp;issued&nbsp;invoice&nbsp;stating&nbsp;all&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_336">
                        336
                      </td>
                      <td nowrap="nowrap">
                        payments&nbsp;due.&nbsp;The&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;shall&nbsp;be&nbsp;transferred&nbsp;to&nbsp;the&nbsp;following&nbsp;bank&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_336">
                        336
                      </td>
                      <td nowrap="nowrap">
                        payments&nbsp;due.&nbsp;The&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;shall&nbsp;be&nbsp;transferred&nbsp;to&nbsp;the&nbsp;following&nbsp;bank&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__49">n</a>
                      </td>
                      <td class="diff_header" id="from0_337">
                        337
                      </td>
                      <td nowrap="nowrap">
                        accounts&nbsp;of&nbsp;the&nbsp;Landlord&nbsp;kept&nbsp;with
                        <span class="diff_sub">&nbsp;Zagrebačka</span>
                        &nbsp;__________&nbsp;Banka:&nbsp;
                        <span class="diff_chg">__</span>
                        &nbsp;Rent&nbsp;payments&nbsp;to&nbsp;bank&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__49">n</a>
                      </td>
                      <td class="diff_header" id="to0_337">
                        337
                      </td>
                      <td nowrap="nowrap">
                        accounts&nbsp;of&nbsp;the&nbsp;Landlord&nbsp;kept&nbsp;with&nbsp;__________&nbsp;
                        <span class="diff_add">Zagrebacka&nbsp;</span>
                        Banka:&nbsp;<span class="diff_chg">i.</span>
                        &nbsp;Rent&nbsp;payments&nbsp;to&nbsp;bank&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_338">
                        338
                      </td>
                      <td nowrap="nowrap">
                        account&nbsp;number:&nbsp;HR6223600001500067879.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;All&nbsp;other&nbsp;payments,&nbsp;including,&nbsp;without&nbsp;being&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_338">
                        338
                      </td>
                      <td nowrap="nowrap">
                        account&nbsp;number:&nbsp;HR6223600001500067879.&nbsp;
                        <span class="diff_chg">ii.</span>
                        &nbsp;All&nbsp;other&nbsp;payments,&nbsp;including,&nbsp;without&nbsp;being&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_339">
                        339
                      </td>
                      <td nowrap="nowrap">
                        limited&nbsp;to,&nbsp;service&nbsp;charges&nbsp;set&nbsp;out&nbsp;in&nbsp;the&nbsp;service&nbsp;agreement,&nbsp;and&nbsp;other,&nbsp;to&nbsp;bank&nbsp;account&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_339">
                        339
                      </td>
                      <td nowrap="nowrap">
                        limited&nbsp;to,&nbsp;service&nbsp;charges&nbsp;set&nbsp;out&nbsp;in&nbsp;the&nbsp;service&nbsp;agreement,&nbsp;and&nbsp;other,&nbsp;to&nbsp;bank&nbsp;account&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_340">
                        340
                      </td>
                      <td nowrap="nowrap">
                        number&nbsp;HR2423600001500110952.&nbsp;The&nbsp;Landlord&nbsp;may&nbsp;issue&nbsp;an&nbsp;invoice&nbsp;for&nbsp;a&nbsp;given&nbsp;month&nbsp;at&nbsp;any&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_340">
                        340
                      </td>
                      <td nowrap="nowrap">
                        number&nbsp;HR2423600001500110952.&nbsp;The&nbsp;Landlord&nbsp;may&nbsp;issue&nbsp;an&nbsp;invoice&nbsp;for&nbsp;a&nbsp;given&nbsp;month&nbsp;at&nbsp;any&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_341">
                        341
                      </td>
                      <td nowrap="nowrap">
                        time&nbsp;on&nbsp;the&nbsp;beginning&nbsp;of&nbsp;a&nbsp;month&nbsp;for&nbsp;which&nbsp;the&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;is&nbsp;due.&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_341">
                        341
                      </td>
                      <td nowrap="nowrap">
                        time&nbsp;on&nbsp;the&nbsp;beginning&nbsp;of&nbsp;a&nbsp;month&nbsp;for&nbsp;which&nbsp;the&nbsp;Rent&nbsp;and&nbsp;Service&nbsp;Charge&nbsp;is&nbsp;due.&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_342">
                        342
                      </td>
                      <td nowrap="nowrap">
                        invoice&nbsp;will&nbsp;be&nbsp;payable&nbsp;up&nbsp;to&nbsp;14&nbsp;days&nbsp;from&nbsp;the&nbsp;issuance&nbsp;of&nbsp;the&nbsp;invoice.&nbsp;The&nbsp;first&nbsp;invoice&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_342">
                        342
                      </td>
                      <td nowrap="nowrap">
                        invoice&nbsp;will&nbsp;be&nbsp;payable&nbsp;up&nbsp;to&nbsp;14&nbsp;days&nbsp;from&nbsp;the&nbsp;issuance&nbsp;of&nbsp;the&nbsp;invoice.&nbsp;The&nbsp;first&nbsp;invoice&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__49"></td>
                      <td class="diff_header" id="from0_343">
                        343
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;issued&nbsp;on&nbsp;or&nbsp;before&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;and&nbsp;shall&nbsp;be&nbsp;transferred&nbsp;within&nbsp;ten&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_343">
                        343
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;issued&nbsp;on&nbsp;or&nbsp;before&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;and&nbsp;shall&nbsp;be&nbsp;transferred&nbsp;within&nbsp;ten&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_344">
                        344
                      </td>
                      <td nowrap="nowrap">
                        (10)&nbsp;days&nbsp;of&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;for&nbsp;the&nbsp;period&nbsp;between&nbsp;Commencement&nbsp;Date&nbsp;and&nbsp;the&nbsp;end&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_344">
                        344
                      </td>
                      <td nowrap="nowrap">
                        (10)&nbsp;days&nbsp;of&nbsp;the&nbsp;Commencement&nbsp;Date&nbsp;for&nbsp;the&nbsp;period&nbsp;between&nbsp;Commencement&nbsp;Date&nbsp;and&nbsp;the&nbsp;end&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__50"></td>
                      <td class="diff_header" id="from0_345">
                        345
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;relevant&nbsp;calendar&nbsp;month.&nbsp;All&nbsp;the&nbsp;other&nbsp;obligations&nbsp;hereunder,&nbsp;if&nbsp;not&nbsp;otherwise&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_345">
                        345
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;relevant&nbsp;calendar&nbsp;month.&nbsp;All&nbsp;the&nbsp;other&nbsp;obligations&nbsp;hereunder,&nbsp;if&nbsp;not&nbsp;otherwise&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_346">
                        346
                      </td>
                      <td nowrap="nowrap">
                        defined&nbsp;herein,&nbsp;shall&nbsp;also&nbsp;be&nbsp;payable&nbsp;as&nbsp;of&nbsp;the&nbsp;Delivery&nbsp;Date&nbsp;(especially,&nbsp;but&nbsp;not&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_346">
                        346
                      </td>
                      <td nowrap="nowrap">
                        defined&nbsp;herein,&nbsp;shall&nbsp;also&nbsp;be&nbsp;payable&nbsp;as&nbsp;of&nbsp;the&nbsp;Delivery&nbsp;Date&nbsp;(especially,&nbsp;but&nbsp;not&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__50">n</a>
                      </td>
                      <td class="diff_header" id="from0_347">
                        347
                      </td>
                      <td nowrap="nowrap">
                        exclusively:&nbsp;electricity,&nbsp;water).&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Payment&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;punctual&nbsp;only&nbsp;if&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__50">n</a>
                      </td>
                      <td class="diff_header" id="to0_347">
                        347
                      </td>
                      <td nowrap="nowrap">
                        exclusively:&nbsp;electricity,&nbsp;water).&nbsp;
                        <span class="diff_chg">7.2</span>
                        &nbsp;Payment&nbsp;shall&nbsp;be&nbsp;deemed&nbsp;punctual&nbsp;only&nbsp;if&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_348">
                        348
                      </td>
                      <td nowrap="nowrap">
                        relevant&nbsp;amount&nbsp;has&nbsp;been&nbsp;credited&nbsp;on&nbsp;Landlord's&nbsp;bank&nbsp;account&nbsp;within&nbsp;the&nbsp;deadline&nbsp;referred&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_348">
                        348
                      </td>
                      <td nowrap="nowrap">
                        relevant&nbsp;amount&nbsp;has&nbsp;been&nbsp;credited&nbsp;on&nbsp;Landlord's&nbsp;bank&nbsp;account&nbsp;within&nbsp;the&nbsp;deadline&nbsp;referred&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__51">n</a>
                      </td>
                      <td class="diff_header" id="from0_349">
                        349
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;above.&nbsp;7.3&nbsp;
                        <span class="diff_chg">__&nbsp;___</span>
                        &nbsp;Other&nbsp;payments&nbsp;more&nbsp;specifically&nbsp;described&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement,&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__51">n</a>
                      </td>
                      <td class="diff_header" id="to0_349">
                        349
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;above.&nbsp;7.3&nbsp;
                        <span class="diff_chg">74&nbsp;15.</span>
                        &nbsp;Other&nbsp;payments&nbsp;more&nbsp;specifically&nbsp;described&nbsp;in&nbsp;the&nbsp;Service&nbsp;Agreement,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__51"></td>
                      <td class="diff_header" id="from0_350">
                        350
                      </td>
                      <td nowrap="nowrap">
                        not&nbsp;regulated&nbsp;in&nbsp;this&nbsp;Lease,&nbsp;shall&nbsp;be&nbsp;paid&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;Service&nbsp;Agreement.&nbsp;
                        <span class="diff_chg">7.4&nbsp;</span>
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_350">
                        350
                      </td>
                      <td nowrap="nowrap">
                        not&nbsp;regulated&nbsp;in&nbsp;this&nbsp;Lease,&nbsp;shall&nbsp;be&nbsp;paid&nbsp;in&nbsp;accordance&nbsp;with&nbsp;the&nbsp;Service&nbsp;Agreement.&nbsp;
                        <span class="diff_chg">___&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_351">
                        351
                      </td>
                      <td nowrap="nowrap">
                        If&nbsp;there&nbsp;is&nbsp;a&nbsp;default&nbsp;in&nbsp;the&nbsp;timely&nbsp;payment&nbsp;of&nbsp;the&nbsp;Rent,&nbsp;Service&nbsp;Charge&nbsp;or&nbsp;charges&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_351">
                        351
                      </td>
                      <td nowrap="nowrap">
                        If&nbsp;there&nbsp;is&nbsp;a&nbsp;default&nbsp;in&nbsp;the&nbsp;timely&nbsp;payment&nbsp;of&nbsp;the&nbsp;Rent,&nbsp;Service&nbsp;Charge&nbsp;or&nbsp;charges&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_352">
                        352
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;to&nbsp;Landlord,&nbsp;or&nbsp;in&nbsp;respect&nbsp;of&nbsp;any&nbsp;payment&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;statutory&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_352">
                        352
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;to&nbsp;Landlord,&nbsp;or&nbsp;in&nbsp;respect&nbsp;of&nbsp;any&nbsp;payment&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;to&nbsp;the&nbsp;Tenant,&nbsp;statutory&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_353">
                        353
                      </td>
                      <td nowrap="nowrap">
                        default&nbsp;interest&nbsp;defined&nbsp;by&nbsp;Croatian&nbsp;Law&nbsp;shall&nbsp;be&nbsp;calculated&nbsp;without&nbsp;the&nbsp;necessity&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_353">
                        353
                      </td>
                      <td nowrap="nowrap">
                        default&nbsp;interest&nbsp;defined&nbsp;by&nbsp;Croatian&nbsp;Law&nbsp;shall&nbsp;be&nbsp;calculated&nbsp;without&nbsp;the&nbsp;necessity&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__52">n</a>
                      </td>
                      <td class="diff_header" id="from0_354">
                        354
                      </td>
                      <td nowrap="nowrap">
                        serve&nbsp;additional&nbsp;notice&nbsp;and&nbsp;invoiced&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;the&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">7.5.</span>
                        &nbsp;Enforcement&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__52">n</a>
                      </td>
                      <td class="diff_header" id="to0_354">
                        354
                      </td>
                      <td nowrap="nowrap">
                        serve&nbsp;additional&nbsp;notice&nbsp;and&nbsp;invoiced&nbsp;to&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;the&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;Enforcement&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_355">
                        355
                      </td>
                      <td nowrap="nowrap">
                        clause&nbsp;The&nbsp;Parties&nbsp;agree&nbsp;that&nbsp;this&nbsp;Lease,&nbsp;upon&nbsp;its&nbsp;solemnization&nbsp;with&nbsp;the&nbsp;public&nbsp;notary,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_355">
                        355
                      </td>
                      <td nowrap="nowrap">
                        clause&nbsp;The&nbsp;Parties&nbsp;agree&nbsp;that&nbsp;this&nbsp;Lease,&nbsp;upon&nbsp;its&nbsp;solemnization&nbsp;with&nbsp;the&nbsp;public&nbsp;notary,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_356">
                        356
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;have&nbsp;the&nbsp;power&nbsp;of&nbsp;public&nbsp;notary&nbsp;deed&nbsp;pursuant&nbsp;to&nbsp;Article&nbsp;54&nbsp;of&nbsp;the&nbsp;Public&nbsp;Notary&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_356">
                        356
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;have&nbsp;the&nbsp;power&nbsp;of&nbsp;public&nbsp;notary&nbsp;deed&nbsp;pursuant&nbsp;to&nbsp;Article&nbsp;54&nbsp;of&nbsp;the&nbsp;Public&nbsp;Notary&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_357">
                        357
                      </td>
                      <td nowrap="nowrap">
                        Act.&nbsp;This&nbsp;Lease&nbsp;is&nbsp;an&nbsp;enforceable&nbsp;document&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;agrees&nbsp;that&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_357">
                        357
                      </td>
                      <td nowrap="nowrap">
                        Act.&nbsp;This&nbsp;Lease&nbsp;is&nbsp;an&nbsp;enforceable&nbsp;document&nbsp;and&nbsp;the&nbsp;Tenant&nbsp;agrees&nbsp;that&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_358">
                        358
                      </td>
                      <td nowrap="nowrap">
                        directly&nbsp;on&nbsp;the&nbsp;grounds&nbsp;of&nbsp;this&nbsp;Lease:&nbsp;(i)&nbsp;conduct&nbsp;enforcement&nbsp;proceedings&nbsp;for&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_358">
                        358
                      </td>
                      <td nowrap="nowrap">
                        directly&nbsp;on&nbsp;the&nbsp;grounds&nbsp;of&nbsp;this&nbsp;Lease:&nbsp;(i)&nbsp;conduct&nbsp;enforcement&nbsp;proceedings&nbsp;for&nbsp;the&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__52"></td>
                      <td class="diff_header" id="from0_363">
                        363
                      </td>
                      <td nowrap="nowrap">
                        ___&nbsp;penalties&nbsp;or&nbsp;payments&nbsp;pertaining&nbsp;to&nbsp;the&nbsp;Lease.&nbsp;The&nbsp;Parties&nbsp;agree&nbsp;that&nbsp;the&nbsp;notary&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_363">
                        363
                      </td>
                      <td nowrap="nowrap">
                        ___&nbsp;penalties&nbsp;or&nbsp;payments&nbsp;pertaining&nbsp;to&nbsp;the&nbsp;Lease.&nbsp;The&nbsp;Parties&nbsp;agree&nbsp;that&nbsp;the&nbsp;notary&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_364">
                        364
                      </td>
                      <td nowrap="nowrap">
                        public&nbsp;is&nbsp;authorized&nbsp;to&nbsp;put&nbsp;the&nbsp;enforcement&nbsp;certificate&nbsp;on&nbsp;this&nbsp;the&nbsp;Lease,&nbsp;on&nbsp;the&nbsp;basis&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_364">
                        364
                      </td>
                      <td nowrap="nowrap">
                        public&nbsp;is&nbsp;authorized&nbsp;to&nbsp;put&nbsp;the&nbsp;enforcement&nbsp;certificate&nbsp;on&nbsp;this&nbsp;the&nbsp;Lease,&nbsp;on&nbsp;the&nbsp;basis&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_365">
                        365
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;a&nbsp;written&nbsp;request&nbsp;containing&nbsp;statement&nbsp;of&nbsp;the&nbsp;Landlord&nbsp;(“Statement”):&nbsp;(i)&nbsp;confirming&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_365">
                        365
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;a&nbsp;written&nbsp;request&nbsp;containing&nbsp;statement&nbsp;of&nbsp;the&nbsp;Landlord&nbsp;(“Statement”):&nbsp;(i)&nbsp;confirming&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_366">
                        366
                      </td>
                      <td nowrap="nowrap">
                        that&nbsp;the&nbsp;Lease&nbsp;has&nbsp;expired&nbsp;or&nbsp;was&nbsp;terminated&nbsp;and&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;third&nbsp;person&nbsp;refuse&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_366">
                        366
                      </td>
                      <td nowrap="nowrap">
                        that&nbsp;the&nbsp;Lease&nbsp;has&nbsp;expired&nbsp;or&nbsp;was&nbsp;terminated&nbsp;and&nbsp;that&nbsp;the&nbsp;Tenant&nbsp;or&nbsp;third&nbsp;person&nbsp;refuse&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__53">n</a>
                      </td>
                      <td class="diff_header" id="from0_367">
                        367
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;voluntarily&nbsp;vacate&nbsp;and&nbsp;hand&nbsp;over&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;AND/OR&nbsp;(ii)&nbsp;in&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;which&nbsp;the&nbsp;amount&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__53">n</a>
                      </td>
                      <td class="diff_header" id="to0_367">
                        367
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;voluntarily&nbsp;vacate&nbsp;and&nbsp;hand&nbsp;over&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;AND/OR&nbsp;(ii)&nbsp;in&nbsp;
                        <span class="diff_chg">§8.</span>
                        &nbsp;which&nbsp;the&nbsp;amount&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_368">
                        368
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;due&nbsp;debt&nbsp;of&nbsp;Landlord&nbsp;against&nbsp;the&nbsp;Tenant&nbsp;arising&nbsp;from&nbsp;the&nbsp;Lease&nbsp;is&nbsp;designated&nbsp;and&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_368">
                        368
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;due&nbsp;debt&nbsp;of&nbsp;Landlord&nbsp;against&nbsp;the&nbsp;Tenant&nbsp;arising&nbsp;from&nbsp;the&nbsp;Lease&nbsp;is&nbsp;designated&nbsp;and&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_369">
                        369
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;the&nbsp;Landlord&nbsp;confirms&nbsp;that&nbsp;the&nbsp;respective&nbsp;Tenant’s&nbsp;debt&nbsp;is&nbsp;not&nbsp;settled.&nbsp;The&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_369">
                        369
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;the&nbsp;Landlord&nbsp;confirms&nbsp;that&nbsp;the&nbsp;respective&nbsp;Tenant’s&nbsp;debt&nbsp;is&nbsp;not&nbsp;settled.&nbsp;The&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_370">
                        370
                      </td>
                      <td nowrap="nowrap">
                        hereby&nbsp;explicitly&nbsp;authorises&nbsp;the&nbsp;Landlord&nbsp;to&nbsp;unilaterally&nbsp;determine&nbsp;the&nbsp;extent&nbsp;and&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_370">
                        370
                      </td>
                      <td nowrap="nowrap">
                        hereby&nbsp;explicitly&nbsp;authorises&nbsp;the&nbsp;Landlord&nbsp;to&nbsp;unilaterally&nbsp;determine&nbsp;the&nbsp;extent&nbsp;and&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__53"></td>
                      <td class="diff_header" id="from0_371">
                        371
                      </td>
                      <td nowrap="nowrap">
                        maturity&nbsp;of&nbsp;its&nbsp;claims&nbsp;from&nbsp;the&nbsp;Lease&nbsp;Agreement&nbsp;in&nbsp;his&nbsp;request&nbsp;for&nbsp;issuance&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_371">
                        371
                      </td>
                      <td nowrap="nowrap">
                        maturity&nbsp;of&nbsp;its&nbsp;claims&nbsp;from&nbsp;the&nbsp;Lease&nbsp;Agreement&nbsp;in&nbsp;his&nbsp;request&nbsp;for&nbsp;issuance&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_372">
                        372
                      </td>
                      <td nowrap="nowrap">
                        enforcement&nbsp;certificate&nbsp;and&nbsp;the&nbsp;enforcement&nbsp;motion.&nbsp;The&nbsp;Tenant&nbsp;hereby&nbsp;explicitly&nbsp;confirms&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_372">
                        372
                      </td>
                      <td nowrap="nowrap">
                        enforcement&nbsp;certificate&nbsp;and&nbsp;the&nbsp;enforcement&nbsp;motion.&nbsp;The&nbsp;Tenant&nbsp;hereby&nbsp;explicitly&nbsp;confirms&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_373">
                        373
                      </td>
                      <td nowrap="nowrap">
                        that&nbsp;the&nbsp;Landlord’s&nbsp;Statement&nbsp;is&nbsp;sufficient&nbsp;for&nbsp;issuance&nbsp;of&nbsp;the&nbsp;enforcement&nbsp;certificate&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_373">
                        373
                      </td>
                      <td nowrap="nowrap">
                        that&nbsp;the&nbsp;Landlord’s&nbsp;Statement&nbsp;is&nbsp;sufficient&nbsp;for&nbsp;issuance&nbsp;of&nbsp;the&nbsp;enforcement&nbsp;certificate&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__54"></td>
                      <td class="diff_header" id="from0_374">
                        374
                      </td>
                      <td nowrap="nowrap">
                        on&nbsp;the&nbsp;Lease&nbsp;and&nbsp;that&nbsp;there&nbsp;is&nbsp;no&nbsp;need&nbsp;to&nbsp;present&nbsp;any&nbsp;other&nbsp;evidence&nbsp;to&nbsp;the&nbsp;notary&nbsp;public&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_374">
                        374
                      </td>
                      <td nowrap="nowrap">
                        on&nbsp;the&nbsp;Lease&nbsp;and&nbsp;that&nbsp;there&nbsp;is&nbsp;no&nbsp;need&nbsp;to&nbsp;present&nbsp;any&nbsp;other&nbsp;evidence&nbsp;to&nbsp;the&nbsp;notary&nbsp;public&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__54">n</a>
                      </td>
                      <td class="diff_header" id="from0_375">
                        375
                      </td>
                      <td nowrap="nowrap">
                        who&nbsp;will&nbsp;be&nbsp;issuing&nbsp;the&nbsp;enforcement&nbsp;certificate.&nbsp;
                        <span class="diff_chg">§8.</span>
                        &nbsp;Other&nbsp;obligations&nbsp;of&nbsp;the&nbsp;Parties&nbsp;
                        <span class="diff_chg">___&nbsp;</span>
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__54">n</a>
                      </td>
                      <td class="diff_header" id="to0_375">
                        375
                      </td>
                      <td nowrap="nowrap">
                        who&nbsp;will&nbsp;be&nbsp;issuing&nbsp;the&nbsp;enforcement&nbsp;certificate.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Other&nbsp;obligations&nbsp;of&nbsp;the&nbsp;Parties&nbsp;
                        <span class="diff_chg">8.1&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_376">
                        376
                      </td>
                      <td nowrap="nowrap">
                        From&nbsp;the&nbsp;day&nbsp;when&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;is&nbsp;taken&nbsp;over&nbsp;by&nbsp;Tenant,&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;fully&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_376">
                        376
                      </td>
                      <td nowrap="nowrap">
                        From&nbsp;the&nbsp;day&nbsp;when&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;is&nbsp;taken&nbsp;over&nbsp;by&nbsp;Tenant,&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;fully&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_377">
                        377
                      </td>
                      <td nowrap="nowrap">
                        responsible&nbsp;for&nbsp;its&nbsp;proper&nbsp;use&nbsp;and&nbsp;for&nbsp;maintaining&nbsp;order&nbsp;and&nbsp;cleanliness&nbsp;in&nbsp;Leased&nbsp;Area.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_377">
                        377
                      </td>
                      <td nowrap="nowrap">
                        responsible&nbsp;for&nbsp;its&nbsp;proper&nbsp;use&nbsp;and&nbsp;for&nbsp;maintaining&nbsp;order&nbsp;and&nbsp;cleanliness&nbsp;in&nbsp;Leased&nbsp;Area.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__55">
                        <a href="#difflib_chg_to0__55">n</a>
                      </td>
                      <td class="diff_header" id="from0_378">
                        378
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">___</span>
                        &nbsp;Landlord&nbsp;shall&nbsp;have&nbsp;right&nbsp;and&nbsp;Tenant&nbsp;hereby&nbsp;irrevocably&nbsp;gives&nbsp;its&nbsp;consent&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__55">n</a>
                      </td>
                      <td class="diff_header" id="to0_378">
                        378
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">8.2</span>
                        &nbsp;Landlord&nbsp;shall&nbsp;have&nbsp;right&nbsp;and&nbsp;Tenant&nbsp;hereby&nbsp;irrevocably&nbsp;gives&nbsp;its&nbsp;consent&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_379">
                        379
                      </td>
                      <td nowrap="nowrap">
                        Landlord's&nbsp;assignment&nbsp;of&nbsp;any&nbsp;rights&nbsp;or&nbsp;obligations&nbsp;as&nbsp;per&nbsp;this&nbsp;Lease&nbsp;(as&nbsp;per&nbsp;bank&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_379">
                        379
                      </td>
                      <td nowrap="nowrap">
                        Landlord's&nbsp;assignment&nbsp;of&nbsp;any&nbsp;rights&nbsp;or&nbsp;obligations&nbsp;as&nbsp;per&nbsp;this&nbsp;Lease&nbsp;(as&nbsp;per&nbsp;bank&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_380">
                        380
                      </td>
                      <td nowrap="nowrap">
                        guarantee/deposit&nbsp;as&nbsp;well)&nbsp;in&nbsp;favour&nbsp;of&nbsp;a&nbsp;bank&nbsp;or&nbsp;financial&nbsp;institution&nbsp;financin
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_380">
                        380
                      </td>
                      <td nowrap="nowrap">
                        guarantee/deposit&nbsp;as&nbsp;well)&nbsp;in&nbsp;favour&nbsp;of&nbsp;a&nbsp;bank&nbsp;or&nbsp;financial&nbsp;institution&nbsp;financin
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__56"></td>
                      <td class="diff_header" id="from0_381">
                        381
                      </td>
                      <td nowrap="nowrap">
                        g/crediting&nbsp;the&nbsp;Landlord&nbsp;or&nbsp;subsequent&nbsp;owner&nbsp;(freeholder)&nbsp;of&nbsp;Development,&nbsp;without&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_381">
                        381
                      </td>
                      <td nowrap="nowrap">
                        g/crediting&nbsp;the&nbsp;Landlord&nbsp;or&nbsp;subsequent&nbsp;owner&nbsp;(freeholder)&nbsp;of&nbsp;Development,&nbsp;without&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__56">n</a>
                      </td>
                      <td class="diff_header" id="from0_382">
                        382
                      </td>
                      <td nowrap="nowrap">
                        Tenant's&nbsp;prior&nbsp;approval.&nbsp;Tenant&nbsp;shall&nbsp;not&nbsp;bear&nbsp;costs&nbsp;of&nbsp;such&nbsp;an&nbsp;assignment.&nbsp;
                        <span class="diff_chg">___</span>&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__56">n</a>
                      </td>
                      <td class="diff_header" id="to0_382">
                        382
                      </td>
                      <td nowrap="nowrap">
                        Tenant's&nbsp;prior&nbsp;approval.&nbsp;Tenant&nbsp;shall&nbsp;not&nbsp;bear&nbsp;costs&nbsp;of&nbsp;such&nbsp;an&nbsp;assignment.&nbsp;
                        <span class="diff_chg">8.3</span>&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_383">
                        383
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;observe&nbsp;the&nbsp;regulations&nbsp;for&nbsp;the&nbsp;Building&nbsp;to&nbsp;be&nbsp;specified&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;in&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_383">
                        383
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;observe&nbsp;the&nbsp;regulations&nbsp;for&nbsp;the&nbsp;Building&nbsp;to&nbsp;be&nbsp;specified&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;in&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_384">
                        384
                      </td>
                      <td nowrap="nowrap">
                        form&nbsp;of&nbsp;a&nbsp;set&nbsp;of&nbsp;House&nbsp;Rules&nbsp;provided&nbsp;that&nbsp;such&nbsp;House&nbsp;Rules&nbsp;will&nbsp;be&nbsp;made&nbsp;available&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_384">
                        384
                      </td>
                      <td nowrap="nowrap">
                        form&nbsp;of&nbsp;a&nbsp;set&nbsp;of&nbsp;House&nbsp;Rules&nbsp;provided&nbsp;that&nbsp;such&nbsp;House&nbsp;Rules&nbsp;will&nbsp;be&nbsp;made&nbsp;available&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__57">n</a>
                      </td>
                      <td class="diff_header" id="from0_385">
                        385
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;in&nbsp;writing&nbsp;prior&nbsp;to&nbsp;their&nbsp;coming&nbsp;into&nbsp;force.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;Tenant&nbsp;shall&nbsp;not&nbsp;bring&nbsp;or&nbsp;allow&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__57">n</a>
                      </td>
                      <td class="diff_header" id="to0_385">
                        385
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;in&nbsp;writing&nbsp;prior&nbsp;to&nbsp;their&nbsp;coming&nbsp;into&nbsp;force.&nbsp;
                        <span class="diff_chg">8.4</span>
                        &nbsp;Tenant&nbsp;shall&nbsp;not&nbsp;bring&nbsp;or&nbsp;allow&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_386">
                        386
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;be&nbsp;brought&nbsp;onto&nbsp;the&nbsp;Site&nbsp;or&nbsp;into&nbsp;the&nbsp;Building&nbsp;(or&nbsp;to&nbsp;allow&nbsp;them&nbsp;to&nbsp;remain&nbsp;if&nbsp;they&nbsp;are&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_386">
                        386
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;be&nbsp;brought&nbsp;onto&nbsp;the&nbsp;Site&nbsp;or&nbsp;into&nbsp;the&nbsp;Building&nbsp;(or&nbsp;to&nbsp;allow&nbsp;them&nbsp;to&nbsp;remain&nbsp;if&nbsp;they&nbsp;are&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_387">
                        387
                      </td>
                      <td nowrap="nowrap">
                        found&nbsp;there)&nbsp;any&nbsp;hazardous&nbsp;materials,&nbsp;the&nbsp;possession&nbsp;and&nbsp;keeping&nbsp;of&nbsp;which&nbsp;is&nbsp;forbidden&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_387">
                        387
                      </td>
                      <td nowrap="nowrap">
                        found&nbsp;there)&nbsp;any&nbsp;hazardous&nbsp;materials,&nbsp;the&nbsp;possession&nbsp;and&nbsp;keeping&nbsp;of&nbsp;which&nbsp;is&nbsp;forbidden&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__57"></td>
                      <td class="diff_header" id="from0_388">
                        388
                      </td>
                      <td nowrap="nowrap">
                        Croatian&nbsp;law,&nbsp;or&nbsp;made&nbsp;conditional&nbsp;upon&nbsp;requirements&nbsp;which&nbsp;are&nbsp;not&nbsp;fulfilled&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_388">
                        388
                      </td>
                      <td nowrap="nowrap">
                        Croatian&nbsp;law,&nbsp;or&nbsp;made&nbsp;conditional&nbsp;upon&nbsp;requirements&nbsp;which&nbsp;are&nbsp;not&nbsp;fulfilled&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_389">
                        389
                      </td>
                      <td nowrap="nowrap">
                        and/or&nbsp;the&nbsp;Leased&nbsp;Premises.&nbsp;The&nbsp;Tenant&nbsp;will&nbsp;fully&nbsp;indemnify&nbsp;the&nbsp;Landlord&nbsp;against&nbsp;all&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_389">
                        389
                      </td>
                      <td nowrap="nowrap">
                        and/or&nbsp;the&nbsp;Leased&nbsp;Premises.&nbsp;The&nbsp;Tenant&nbsp;will&nbsp;fully&nbsp;indemnify&nbsp;the&nbsp;Landlord&nbsp;against&nbsp;all&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__58"></td>
                      <td class="diff_header" id="from0_390">
                        390
                      </td>
                      <td nowrap="nowrap">
                        direct&nbsp;and&nbsp;indirect&nbsp;consequences&nbsp;of&nbsp;any&nbsp;breach&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;of&nbsp;this&nbsp;provision.&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_390">
                        390
                      </td>
                      <td nowrap="nowrap">
                        direct&nbsp;and&nbsp;indirect&nbsp;consequences&nbsp;of&nbsp;any&nbsp;breach&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;of&nbsp;this&nbsp;provision.&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_391">
                        391
                      </td>
                      <td nowrap="nowrap">
                        obligations&nbsp;contained&nbsp;in&nbsp;this&nbsp;Clause&nbsp;shall&nbsp;survive&nbsp;the&nbsp;termination&nbsp;of&nbsp;this&nbsp;Lease&nbsp;during&nbsp;a&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_391">
                        391
                      </td>
                      <td nowrap="nowrap">
                        obligations&nbsp;contained&nbsp;in&nbsp;this&nbsp;Clause&nbsp;shall&nbsp;survive&nbsp;the&nbsp;termination&nbsp;of&nbsp;this&nbsp;Lease&nbsp;during&nbsp;a&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__58">n</a>
                      </td>
                      <td class="diff_header" id="from0_392">
                        392
                      </td>
                      <td nowrap="nowrap">
                        period&nbsp;when&nbsp;the&nbsp;Tenant&nbsp;occupies&nbsp;the&nbsp;Premises.&nbsp;
                        <span class="diff_chg">___</span>
                        &nbsp;The&nbsp;Tenant&nbsp;hereby&nbsp;undertakes&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__58">n</a>
                      </td>
                      <td class="diff_header" id="to0_392">
                        392
                      </td>
                      <td nowrap="nowrap">
                        period&nbsp;when&nbsp;the&nbsp;Tenant&nbsp;occupies&nbsp;the&nbsp;Premises.&nbsp;
                        <span class="diff_chg">8.5</span>
                        &nbsp;The&nbsp;Tenant&nbsp;hereby&nbsp;undertakes&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_393">
                        393
                      </td>
                      <td nowrap="nowrap">
                        relation&nbsp;to&nbsp;the&nbsp;use&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;of&nbsp;the&nbsp;Premises,&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site,&nbsp;throughout&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_393">
                        393
                      </td>
                      <td nowrap="nowrap">
                        relation&nbsp;to&nbsp;the&nbsp;use&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;of&nbsp;the&nbsp;Premises,&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site,&nbsp;throughout&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__59">
                        <a href="#difflib_chg_to0__59">n</a>
                      </td>
                      <td class="diff_header" id="from0_394">
                        394
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease:&nbsp;
                        <span class="diff_chg">_____</span>
                        &nbsp;to&nbsp;comply&nbsp;at&nbsp;its&nbsp;own&nbsp;expense&nbsp;with&nbsp;all&nbsp;relevant&nbsp;laws,&nbsp;and&nbsp;all&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__59">n</a>
                      </td>
                      <td class="diff_header" id="to0_394">
                        394
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;term&nbsp;of&nbsp;the&nbsp;lease:&nbsp;
                        <span class="diff_chg">8.5.1</span>
                        &nbsp;to&nbsp;comply&nbsp;at&nbsp;its&nbsp;own&nbsp;expense&nbsp;with&nbsp;all&nbsp;relevant&nbsp;laws,&nbsp;and&nbsp;all&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_395">
                        395
                      </td>
                      <td nowrap="nowrap">
                        lawful&nbsp;requirements&nbsp;of&nbsp;all&nbsp;competent&nbsp;authorities,&nbsp;and&nbsp;
                        <span class="diff_chg">_____</span>
                        &nbsp;to&nbsp;execute&nbsp;all&nbsp;works&nbsp;and&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_395">
                        395
                      </td>
                      <td nowrap="nowrap">
                        lawful&nbsp;requirements&nbsp;of&nbsp;all&nbsp;competent&nbsp;authorities,&nbsp;and&nbsp;
                        <span class="diff_chg">8.5.2</span>
                        &nbsp;to&nbsp;execute&nbsp;all&nbsp;works&nbsp;and&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_396">
                        396
                      </td>
                      <td nowrap="nowrap">
                        do&nbsp;(or&nbsp;refrain&nbsp;from&nbsp;doing)&nbsp;all&nbsp;such&nbsp;acts&nbsp;as&nbsp;may&nbsp;be&nbsp;required&nbsp;by&nbsp;or&nbsp;under&nbsp;any&nbsp;current&nbsp;law,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_396">
                        396
                      </td>
                      <td nowrap="nowrap">
                        do&nbsp;(or&nbsp;refrain&nbsp;from&nbsp;doing)&nbsp;all&nbsp;such&nbsp;acts&nbsp;as&nbsp;may&nbsp;be&nbsp;required&nbsp;by&nbsp;or&nbsp;under&nbsp;any&nbsp;current&nbsp;law,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__60"></td>
                      <td class="diff_header" id="from0_397">
                        397
                      </td>
                      <td nowrap="nowrap">
                        regulation&nbsp;or&nbsp;other&nbsp;requirement&nbsp;lawfully&nbsp;imposed&nbsp;by&nbsp;a&nbsp;state&nbsp;government,&nbsp;court,&nbsp;local&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_397">
                        397
                      </td>
                      <td nowrap="nowrap">
                        regulation&nbsp;or&nbsp;other&nbsp;requirement&nbsp;lawfully&nbsp;imposed&nbsp;by&nbsp;a&nbsp;state&nbsp;government,&nbsp;court,&nbsp;local&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__60">n</a>
                      </td>
                      <td class="diff_header" id="from0_398">
                        398
                      </td>
                      <td nowrap="nowrap">
                        authority,&nbsp;<span class="diff_chg">_____</span>
                        &nbsp;subject&nbsp;to&nbsp;the&nbsp;exceptions&nbsp;set&nbsp;out&nbsp;in&nbsp;this&nbsp;Lease,&nbsp;not&nbsp;to&nbsp;do&nbsp;or&nbsp;fail&nbsp;to&nbsp;do&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__60">n</a>
                      </td>
                      <td class="diff_header" id="to0_398">
                        398
                      </td>
                      <td nowrap="nowrap">
                        authority,&nbsp;<span class="diff_chg">8.5.3</span>
                        &nbsp;subject&nbsp;to&nbsp;the&nbsp;exceptions&nbsp;set&nbsp;out&nbsp;in&nbsp;this&nbsp;Lease,&nbsp;not&nbsp;to&nbsp;do&nbsp;or&nbsp;fail&nbsp;to&nbsp;do&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_399">
                        399
                      </td>
                      <td nowrap="nowrap">
                        anything,&nbsp;or&nbsp;permit&nbsp;any&nbsp;other&nbsp;person&nbsp;to&nbsp;do&nbsp;or&nbsp;fail&nbsp;to&nbsp;do&nbsp;anything,&nbsp;which&nbsp;may&nbsp;cause&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_399">
                        399
                      </td>
                      <td nowrap="nowrap">
                        anything,&nbsp;or&nbsp;permit&nbsp;any&nbsp;other&nbsp;person&nbsp;to&nbsp;do&nbsp;or&nbsp;fail&nbsp;to&nbsp;do&nbsp;anything,&nbsp;which&nbsp;may&nbsp;cause&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_400">
                        400
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;to&nbsp;become&nbsp;liable&nbsp;for&nbsp;any&nbsp;penalties,&nbsp;damages,&nbsp;or&nbsp;other&nbsp;costs&nbsp;or&nbsp;expenses&nbsp;and&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_400">
                        400
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;to&nbsp;become&nbsp;liable&nbsp;for&nbsp;any&nbsp;penalties,&nbsp;damages,&nbsp;or&nbsp;other&nbsp;costs&nbsp;or&nbsp;expenses&nbsp;and&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__61">n</a>
                      </td>
                      <td class="diff_header" id="from0_401">
                        401
                      </td>
                      <td nowrap="nowrap">
                        indemnify&nbsp;Landlord&nbsp;against&nbsp;all&nbsp;
                        <span class="diff_chg">_____</span>
                        &nbsp;consequences&nbsp;of&nbsp;any&nbsp;breach&nbsp;by&nbsp;Tenant&nbsp;of&nbsp;this&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__61">n</a>
                      </td>
                      <td class="diff_header" id="to0_401">
                        401
                      </td>
                      <td nowrap="nowrap">
                        indemnify&nbsp;Landlord&nbsp;against&nbsp;all&nbsp;
                        <span class="diff_chg">8.5.4</span>
                        &nbsp;consequences&nbsp;of&nbsp;any&nbsp;breach&nbsp;by&nbsp;Tenant&nbsp;of&nbsp;this&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_402">
                        402
                      </td>
                      <td nowrap="nowrap">
                        obligation,&nbsp;and&nbsp;to&nbsp;take&nbsp;out&nbsp;and&nbsp;maintain&nbsp;at&nbsp;own&nbsp;cost&nbsp;(regulating&nbsp;all&nbsp;due&nbsp;premiums&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_402">
                        402
                      </td>
                      <td nowrap="nowrap">
                        obligation,&nbsp;and&nbsp;to&nbsp;take&nbsp;out&nbsp;and&nbsp;maintain&nbsp;at&nbsp;own&nbsp;cost&nbsp;(regulating&nbsp;all&nbsp;due&nbsp;premiums&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_403">
                        403
                      </td>
                      <td nowrap="nowrap">
                        time)&nbsp;presenting&nbsp;a&nbsp;copy&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;a&nbsp;policy&nbsp;issued&nbsp;by&nbsp;one&nbsp;of&nbsp;insurers&nbsp;mentioned&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_403">
                        403
                      </td>
                      <td nowrap="nowrap">
                        time)&nbsp;presenting&nbsp;a&nbsp;copy&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;a&nbsp;policy&nbsp;issued&nbsp;by&nbsp;one&nbsp;of&nbsp;insurers&nbsp;mentioned&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_404">
                        404
                      </td>
                      <td nowrap="nowrap">
                        Exhibit&nbsp;#7&nbsp;and&nbsp;approved&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;not&nbsp;later&nbsp;than&nbsp;on&nbsp;the&nbsp;last&nbsp;working&nbsp;day&nbsp;before&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_404">
                        404
                      </td>
                      <td nowrap="nowrap">
                        Exhibit&nbsp;#7&nbsp;and&nbsp;approved&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;not&nbsp;later&nbsp;than&nbsp;on&nbsp;the&nbsp;last&nbsp;working&nbsp;day&nbsp;before&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_405">
                        405
                      </td>
                      <td nowrap="nowrap">
                        Commencement&nbsp;Date,&nbsp;covering&nbsp;insurance&nbsp;against&nbsp;general&nbsp;risks&nbsp;of&nbsp;fire&nbsp;and&nbsp;other&nbsp;perils&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_405">
                        405
                      </td>
                      <td nowrap="nowrap">
                        Commencement&nbsp;Date,&nbsp;covering&nbsp;insurance&nbsp;against&nbsp;general&nbsp;risks&nbsp;of&nbsp;fire&nbsp;and&nbsp;other&nbsp;perils&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__61"></td>
                      <td class="diff_header" id="from0_410">
                        410
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;tangible&nbsp;assets&nbsp;(equipment/furniture/stock&nbsp;of&nbsp;goods)&nbsp;brought&nbsp;into&nbsp;the&nbsp;Premises&nbsp;and&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_410">
                        410
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;tangible&nbsp;assets&nbsp;(equipment/furniture/stock&nbsp;of&nbsp;goods)&nbsp;brought&nbsp;into&nbsp;the&nbsp;Premises&nbsp;and&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_411">
                        411
                      </td>
                      <td nowrap="nowrap">
                        money&nbsp;in&nbsp;manipulation&nbsp;and&nbsp;in&nbsp;closed&nbsp;places,&nbsp;if&nbsp;left&nbsp;during&nbsp;the&nbsp;night&nbsp;in&nbsp;the&nbsp;Premises&nbsp;/&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_411">
                        411
                      </td>
                      <td nowrap="nowrap">
                        money&nbsp;in&nbsp;manipulation&nbsp;and&nbsp;in&nbsp;closed&nbsp;places,&nbsp;if&nbsp;left&nbsp;during&nbsp;the&nbsp;night&nbsp;in&nbsp;the&nbsp;Premises&nbsp;/&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_412">
                        412
                      </td>
                      <td nowrap="nowrap">
                        storage&nbsp;area.&nbsp;The&nbsp;Tenant&nbsp;is&nbsp;_&nbsp;obliged&nbsp;furthermore&nbsp;to&nbsp;deliver&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;insurance&nbsp;_&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_412">
                        412
                      </td>
                      <td nowrap="nowrap">
                        storage&nbsp;area.&nbsp;The&nbsp;Tenant&nbsp;is&nbsp;_&nbsp;obliged&nbsp;furthermore&nbsp;to&nbsp;deliver&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;insurance&nbsp;_&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_413">
                        413
                      </td>
                      <td nowrap="nowrap">
                        policy&nbsp;regarding&nbsp;civil&nbsp;liability&nbsp;of&nbsp;the&nbsp;operations&nbsp;of&nbsp;Tenant&nbsp;against&nbsp;third&nbsp;party&nbsp;claims&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_413">
                        413
                      </td>
                      <td nowrap="nowrap">
                        policy&nbsp;regarding&nbsp;civil&nbsp;liability&nbsp;of&nbsp;the&nbsp;operations&nbsp;of&nbsp;Tenant&nbsp;against&nbsp;third&nbsp;party&nbsp;claims&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__62">n</a>
                      </td>
                      <td class="diff_header" id="from0_414">
                        414
                      </td>
                      <td nowrap="nowrap">
                        arising&nbsp;from&nbsp;physical&nbsp;injury&nbsp;and&nbsp;property&nbsp;loss&nbsp;or&nbsp;damage&nbsp;in
                        <span class="diff_sub">&nbsp;</span>_
                        <span class="diff_sub">__</span>
                        &nbsp;the&nbsp;Premises.&nbsp;The&nbsp;limit&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__62">n</a>
                      </td>
                      <td class="diff_header" id="to0_414">
                        414
                      </td>
                      <td nowrap="nowrap">
                        arising&nbsp;from&nbsp;physical&nbsp;injury&nbsp;and&nbsp;property&nbsp;loss&nbsp;or&nbsp;damage&nbsp;
                        <span class="diff_add">__&nbsp;</span>
                        in_&nbsp;the&nbsp;Premises.&nbsp;The&nbsp;limit&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_415">
                        415
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;insurance&nbsp;against&nbsp;third&nbsp;party&nbsp;liability&nbsp;per&nbsp;event&nbsp;shall&nbsp;not&nbsp;amount&nbsp;less&nbsp;than&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_415">
                        415
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;insurance&nbsp;against&nbsp;third&nbsp;party&nbsp;liability&nbsp;per&nbsp;event&nbsp;shall&nbsp;not&nbsp;amount&nbsp;less&nbsp;than&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_416">
                        416
                      </td>
                      <td nowrap="nowrap">
                        minimum&nbsp;equivalent&nbsp;in&nbsp;Croatian&nbsp;Kuna&nbsp;of&nbsp;200,000.00&nbsp;EUR&nbsp;(two&nbsp;hundred&nbsp;thousand&nbsp;euro).&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_416">
                        416
                      </td>
                      <td nowrap="nowrap">
                        minimum&nbsp;equivalent&nbsp;in&nbsp;Croatian&nbsp;Kuna&nbsp;of&nbsp;200,000.00&nbsp;EUR&nbsp;(two&nbsp;hundred&nbsp;thousand&nbsp;euro).&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_417">
                        417
                      </td>
                      <td nowrap="nowrap">
                        liability&nbsp;insurance&nbsp;policy&nbsp;shall&nbsp;include&nbsp;the&nbsp;clause&nbsp;that&nbsp;the&nbsp;insurance&nbsp;covers&nbsp;all&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_417">
                        417
                      </td>
                      <td nowrap="nowrap">
                        liability&nbsp;insurance&nbsp;policy&nbsp;shall&nbsp;include&nbsp;the&nbsp;clause&nbsp;that&nbsp;the&nbsp;insurance&nbsp;covers&nbsp;all&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_418">
                        418
                      </td>
                      <td nowrap="nowrap">
                        associated&nbsp;actions&nbsp;for&nbsp;damages&nbsp;for&nbsp;which&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;liable&nbsp;and&nbsp;which&nbsp;have&nbsp;been&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_418">
                        418
                      </td>
                      <td nowrap="nowrap">
                        associated&nbsp;actions&nbsp;for&nbsp;damages&nbsp;for&nbsp;which&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;liable&nbsp;and&nbsp;which&nbsp;have&nbsp;been&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__62"></td>
                      <td class="diff_header" id="from0_424">
                        424
                      </td>
                      <td nowrap="nowrap">
                        insurance&nbsp;policies,&nbsp;or&nbsp;which&nbsp;might&nbsp;prevent&nbsp;the&nbsp;Landlord&nbsp;from&nbsp;obtaining&nbsp;such&nbsp;insurance&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_424">
                        424
                      </td>
                      <td nowrap="nowrap">
                        insurance&nbsp;policies,&nbsp;or&nbsp;which&nbsp;might&nbsp;prevent&nbsp;the&nbsp;Landlord&nbsp;from&nbsp;obtaining&nbsp;such&nbsp;insurance&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_425">
                        425
                      </td>
                      <td nowrap="nowrap">
                        policies&nbsp;from&nbsp;companies&nbsp;acceptable&nbsp;to&nbsp;the&nbsp;Landlord.&nbsp;If&nbsp;anything&nbsp;done,&nbsp;omitted&nbsp;to&nbsp;be&nbsp;done&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_425">
                        425
                      </td>
                      <td nowrap="nowrap">
                        policies&nbsp;from&nbsp;companies&nbsp;acceptable&nbsp;to&nbsp;the&nbsp;Landlord.&nbsp;If&nbsp;anything&nbsp;done,&nbsp;omitted&nbsp;to&nbsp;be&nbsp;done&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_426">
                        426
                      </td>
                      <td nowrap="nowrap">
                        or&nbsp;allowed&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;to&nbsp;be&nbsp;kept&nbsp;on&nbsp;the&nbsp;Premises&nbsp;shall&nbsp;cause&nbsp;the&nbsp;rate&nbsp;of&nbsp;fire&nbsp;or&nbsp;other&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_426">
                        426
                      </td>
                      <td nowrap="nowrap">
                        or&nbsp;allowed&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;to&nbsp;be&nbsp;kept&nbsp;on&nbsp;the&nbsp;Premises&nbsp;shall&nbsp;cause&nbsp;the&nbsp;rate&nbsp;of&nbsp;fire&nbsp;or&nbsp;other&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_427">
                        427
                      </td>
                      <td nowrap="nowrap">
                        insurance&nbsp;on&nbsp;the&nbsp;Site&nbsp;to&nbsp;be&nbsp;increased,&nbsp;then&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;the&nbsp;Landlord&nbsp;the&nbsp;amount&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_427">
                        427
                      </td>
                      <td nowrap="nowrap">
                        insurance&nbsp;on&nbsp;the&nbsp;Site&nbsp;to&nbsp;be&nbsp;increased,&nbsp;then&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;the&nbsp;Landlord&nbsp;the&nbsp;amount&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__63">n</a>
                      </td>
                      <td class="diff_header" id="from0_428">
                        428
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;any&nbsp;such&nbsp;increase&nbsp;of&nbsp;the&nbsp;insurance&nbsp;premium&nbsp;on&nbsp;his&nbsp;demand.&nbsp;
                        <span class="diff_chg">
                          ____&nbsp;____&nbsp;____&nbsp;____
                        </span>
                        &nbsp;The&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__63">n</a>
                      </td>
                      <td class="diff_header" id="to0_428">
                        428
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;any&nbsp;such&nbsp;increase&nbsp;of&nbsp;the&nbsp;insurance&nbsp;premium&nbsp;on&nbsp;his&nbsp;demand.&nbsp;
                        <span class="diff_chg">
                          8.6.&nbsp;8.7.&nbsp;8.8.&nbsp;8.9.
                        </span>
                        &nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_429">
                        429
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;shall,&nbsp;on&nbsp;the&nbsp;beginning&nbsp;of&nbsp;each&nbsp;year&nbsp;and&nbsp;until&nbsp;the&nbsp;month&nbsp;of&nbsp;March&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_429">
                        429
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;shall,&nbsp;on&nbsp;the&nbsp;beginning&nbsp;of&nbsp;each&nbsp;year&nbsp;and&nbsp;until&nbsp;the&nbsp;month&nbsp;of&nbsp;March&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_430">
                        430
                      </td>
                      <td nowrap="nowrap">
                        respective&nbsp;year&nbsp;at&nbsp;the&nbsp;latest,&nbsp;submit&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;the&nbsp;copy&nbsp;of&nbsp;the&nbsp;policy&nbsp;as&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_430">
                        430
                      </td>
                      <td nowrap="nowrap">
                        respective&nbsp;year&nbsp;at&nbsp;the&nbsp;latest,&nbsp;submit&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;the&nbsp;copy&nbsp;of&nbsp;the&nbsp;policy&nbsp;as&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_431">
                        431
                      </td>
                      <td nowrap="nowrap">
                        stipulated&nbsp;in&nbsp;first&nbsp;paragraph&nbsp;of&nbsp;this&nbsp;article&nbsp;hereof&nbsp;as&nbsp;well&nbsp;as&nbsp;the&nbsp;prove&nbsp;of&nbsp;the&nbsp;payment.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_431">
                        431
                      </td>
                      <td nowrap="nowrap">
                        stipulated&nbsp;in&nbsp;first&nbsp;paragraph&nbsp;of&nbsp;this&nbsp;article&nbsp;hereof&nbsp;as&nbsp;well&nbsp;as&nbsp;the&nbsp;prove&nbsp;of&nbsp;the&nbsp;payment.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_432">
                        432
                      </td>
                      <td nowrap="nowrap">
                        Unless&nbsp;otherwise&nbsp;provided&nbsp;herein,&nbsp;Tenant&nbsp;shall&nbsp;have&nbsp;no&nbsp;right&nbsp;to&nbsp;reduce,&nbsp;set&nbsp;off&nbsp;from&nbsp;or&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_432">
                        432
                      </td>
                      <td nowrap="nowrap">
                        Unless&nbsp;otherwise&nbsp;provided&nbsp;herein,&nbsp;Tenant&nbsp;shall&nbsp;have&nbsp;no&nbsp;right&nbsp;to&nbsp;reduce,&nbsp;set&nbsp;off&nbsp;from&nbsp;or&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__63"></td>
                      <td class="diff_header" id="from0_435">
                        435
                      </td>
                      <td nowrap="nowrap">
                        by&nbsp;mutual&nbsp;consent&nbsp;of&nbsp;the&nbsp;Parties&nbsp;or&nbsp;the&nbsp;arbitration&nbsp;court&nbsp;or&nbsp;amicably&nbsp;settled&nbsp;by&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_435">
                        435
                      </td>
                      <td nowrap="nowrap">
                        by&nbsp;mutual&nbsp;consent&nbsp;of&nbsp;the&nbsp;Parties&nbsp;or&nbsp;the&nbsp;arbitration&nbsp;court&nbsp;or&nbsp;amicably&nbsp;settled&nbsp;by&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_436">
                        436
                      </td>
                      <td nowrap="nowrap">
                        Parties.&nbsp;Not&nbsp;applicable.&nbsp;After&nbsp;the&nbsp;Handover&nbsp;of&nbsp;the&nbsp;Premises,&nbsp;Landlord&nbsp;shall,&nbsp;at&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_436">
                        436
                      </td>
                      <td nowrap="nowrap">
                        Parties.&nbsp;Not&nbsp;applicable.&nbsp;After&nbsp;the&nbsp;Handover&nbsp;of&nbsp;the&nbsp;Premises,&nbsp;Landlord&nbsp;shall,&nbsp;at&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_437">
                        437
                      </td>
                      <td nowrap="nowrap">
                        request&nbsp;of&nbsp;Tenant,&nbsp;furnish&nbsp;Tenant&nbsp;with&nbsp;a&nbsp;copy&nbsp;of&nbsp;the&nbsp;insurance&nbsp;policy&nbsp;of&nbsp;the&nbsp;Building,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_437">
                        437
                      </td>
                      <td nowrap="nowrap">
                        request&nbsp;of&nbsp;Tenant,&nbsp;furnish&nbsp;Tenant&nbsp;with&nbsp;a&nbsp;copy&nbsp;of&nbsp;the&nbsp;insurance&nbsp;policy&nbsp;of&nbsp;the&nbsp;Building,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_438">
                        438
                      </td>
                      <td nowrap="nowrap">
                        including&nbsp;the&nbsp;Premises,&nbsp;issued&nbsp;by&nbsp;a&nbsp;reputable&nbsp;insurance&nbsp;company&nbsp;and&nbsp;maintain&nbsp;such&nbsp;policy&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_438">
                        438
                      </td>
                      <td nowrap="nowrap">
                        including&nbsp;the&nbsp;Premises,&nbsp;issued&nbsp;by&nbsp;a&nbsp;reputable&nbsp;insurance&nbsp;company&nbsp;and&nbsp;maintain&nbsp;such&nbsp;policy&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__64">
                        <a href="#difflib_chg_to0__64">n</a>
                      </td>
                      <td class="diff_header" id="from0_439">
                        439
                      </td>
                      <td nowrap="nowrap">
                        throughout&nbsp;the&nbsp;entire&nbsp;lease&nbsp;period,&nbsp;including&nbsp;any&nbsp;extension&nbsp;thereof.&nbsp;
                        <span class="diff_chg">8.9.</span>
                        &nbsp;The&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__64">n</a>
                      </td>
                      <td class="diff_header" id="to0_439">
                        439
                      </td>
                      <td nowrap="nowrap">
                        throughout&nbsp;the&nbsp;entire&nbsp;lease&nbsp;period,&nbsp;including&nbsp;any&nbsp;extension&nbsp;thereof.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;The&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_440">
                        440
                      </td>
                      <td nowrap="nowrap">
                        hereby&nbsp;consents&nbsp;to&nbsp;all&nbsp;or&nbsp;part&nbsp;of&nbsp;its&nbsp;liabilities&nbsp;towards&nbsp;the&nbsp;Landlord&nbsp;arising&nbsp;out&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_440">
                        440
                      </td>
                      <td nowrap="nowrap">
                        hereby&nbsp;consents&nbsp;to&nbsp;all&nbsp;or&nbsp;part&nbsp;of&nbsp;its&nbsp;liabilities&nbsp;towards&nbsp;the&nbsp;Landlord&nbsp;arising&nbsp;out&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_441">
                        441
                      </td>
                      <td nowrap="nowrap">
                        this&nbsp;Lease&nbsp;(including:&nbsp;Rent,&nbsp;Service&nbsp;Charge,&nbsp;any&nbsp;other&nbsp;payments&nbsp;arising&nbsp;out&nbsp;of&nbsp;this&nbsp;Lease&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_441">
                        441
                      </td>
                      <td nowrap="nowrap">
                        this&nbsp;Lease&nbsp;(including:&nbsp;Rent,&nbsp;Service&nbsp;Charge,&nbsp;any&nbsp;other&nbsp;payments&nbsp;arising&nbsp;out&nbsp;of&nbsp;this&nbsp;Lease&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__65"></td>
                      <td class="diff_header" id="from0_442">
                        442
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;the&nbsp;rights&nbsp;from&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;or&nbsp;other&nbsp;securities)&nbsp;being&nbsp;transferred&nbsp;in&nbsp;favour&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_442">
                        442
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;the&nbsp;rights&nbsp;from&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;or&nbsp;other&nbsp;securities)&nbsp;being&nbsp;transferred&nbsp;in&nbsp;favour&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__65">n</a>
                      </td>
                      <td class="diff_header" id="from0_443">
                        443
                      </td>
                      <td nowrap="nowrap">
                        of<span class="diff_sub">&nbsp;Zagrebačka</span>
                        &nbsp;__________&nbsp;banka&nbsp;
                        <span class="diff_sub">d.d.&nbsp;</span>
                        ___&nbsp;or&nbsp;other&nbsp;financial&nbsp;institution&nbsp;financing/&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__65">n</a>
                      </td>
                      <td class="diff_header" id="to0_443">
                        443
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;__________&nbsp;
                        <span class="diff_add">Zagrebacka&nbsp;</span>
                        banka&nbsp;___<span class="diff_add">_&nbsp;dd.</span>
                        &nbsp;or&nbsp;other&nbsp;financial&nbsp;institution&nbsp;financing/&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__66"></td>
                      <td class="diff_header" id="from0_444">
                        444
                      </td>
                      <td nowrap="nowrap">
                        crediting&nbsp;the&nbsp;Landlord&nbsp;or&nbsp;subsequent&nbsp;owner&nbsp;(freeholder)&nbsp;of&nbsp;Development&nbsp;mentioned&nbsp;in&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_444">
                        444
                      </td>
                      <td nowrap="nowrap">
                        crediting&nbsp;the&nbsp;Landlord&nbsp;or&nbsp;subsequent&nbsp;owner&nbsp;(freeholder)&nbsp;of&nbsp;Development&nbsp;mentioned&nbsp;in&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_445">
                        445
                      </td>
                      <td nowrap="nowrap">
                        Lease&nbsp;agreement.&nbsp;In&nbsp;the&nbsp;event&nbsp;that&nbsp;such&nbsp;assignment&nbsp;is&nbsp;made,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;undertake&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_445">
                        445
                      </td>
                      <td nowrap="nowrap">
                        Lease&nbsp;agreement.&nbsp;In&nbsp;the&nbsp;event&nbsp;that&nbsp;such&nbsp;assignment&nbsp;is&nbsp;made,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;undertake&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__66">n</a>
                      </td>
                      <td class="diff_header" id="from0_446">
                        446
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">___</span>
                        &nbsp;irrevocably&nbsp;to&nbsp;transfer&nbsp;amounts,&nbsp;which&nbsp;constitute&nbsp;present&nbsp;and&nbsp;future&nbsp;liabilities&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__66">n</a>
                      </td>
                      <td class="diff_header" id="to0_446">
                        446
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">§9.</span>
                        &nbsp;irrevocably&nbsp;to&nbsp;transfer&nbsp;amounts,&nbsp;which&nbsp;constitute&nbsp;present&nbsp;and&nbsp;future&nbsp;liabilities&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_447">
                        447
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;towards&nbsp;the&nbsp;Landlord,&nbsp;on&nbsp;written&nbsp;request,&nbsp;to&nbsp;a&nbsp;bank&nbsp;account&nbsp;indicated&nbsp;by&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_447">
                        447
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;towards&nbsp;the&nbsp;Landlord,&nbsp;on&nbsp;written&nbsp;request,&nbsp;to&nbsp;a&nbsp;bank&nbsp;account&nbsp;indicated&nbsp;by&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__67">n</a>
                      </td>
                      <td class="diff_header" id="from0_448">
                        448
                      </td>
                      <td nowrap="nowrap">
                        Landlord.&nbsp;<span class="diff_chg">§9.</span>
                        &nbsp;Use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;Keys,&nbsp;Sub-letting,
                        <span class="diff_sub">&nbsp;____&nbsp;________</span>
                        &nbsp;Assignment&nbsp;<span class="diff_chg">___</span>
                        &nbsp;The&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__67">n</a>
                      </td>
                      <td class="diff_header" id="to0_448">
                        448
                      </td>
                      <td nowrap="nowrap">
                        Landlord.&nbsp;<span class="diff_chg">___</span>
                        &nbsp;Use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area,&nbsp;Keys,&nbsp;
                        <span class="diff_add">____________&nbsp;</span>Sub-
                        <span class="diff_add">&nbsp;</span>
                        letting,&nbsp;Assignment&nbsp;
                        <span class="diff_chg">9.1</span>&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__67"></td>
                      <td class="diff_header" id="from0_449">
                        449
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;shall&nbsp;only&nbsp;be&nbsp;used&nbsp;in&nbsp;compliance&nbsp;with&nbsp;the&nbsp;requirements&nbsp;imposed&nbsp;by&nbsp;legal&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_449">
                        449
                      </td>
                      <td nowrap="nowrap">
                        Premises&nbsp;shall&nbsp;only&nbsp;be&nbsp;used&nbsp;in&nbsp;compliance&nbsp;with&nbsp;the&nbsp;requirements&nbsp;imposed&nbsp;by&nbsp;legal&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_450">
                        450
                      </td>
                      <td nowrap="nowrap">
                        provisions&nbsp;and&nbsp;provisions&nbsp;of&nbsp;this&nbsp;Agreement&nbsp;and&nbsp;Tenant&nbsp;shall&nbsp;bear&nbsp;all&nbsp;costs&nbsp;in&nbsp;relation&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_450">
                        450
                      </td>
                      <td nowrap="nowrap">
                        provisions&nbsp;and&nbsp;provisions&nbsp;of&nbsp;this&nbsp;Agreement&nbsp;and&nbsp;Tenant&nbsp;shall&nbsp;bear&nbsp;all&nbsp;costs&nbsp;in&nbsp;relation&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_451">
                        451
                      </td>
                      <td nowrap="nowrap">
                        thereto.&nbsp;Any&nbsp;restrictions&nbsp;on&nbsp;such&nbsp;use&nbsp;will&nbsp;not&nbsp;affect&nbsp;the&nbsp;obligations&nbsp;of&nbsp;Tenant&nbsp;pursuant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_451">
                        451
                      </td>
                      <td nowrap="nowrap">
                        thereto.&nbsp;Any&nbsp;restrictions&nbsp;on&nbsp;such&nbsp;use&nbsp;will&nbsp;not&nbsp;affect&nbsp;the&nbsp;obligations&nbsp;of&nbsp;Tenant&nbsp;pursuant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_452">
                        452
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;this&nbsp;Agreement,&nbsp;unless&nbsp;any&nbsp;restriction&nbsp;on&nbsp;use&nbsp;arises&nbsp;at&nbsp;the&nbsp;fault&nbsp;of&nbsp;the&nbsp;Landlord.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_452">
                        452
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;this&nbsp;Agreement,&nbsp;unless&nbsp;any&nbsp;restriction&nbsp;on&nbsp;use&nbsp;arises&nbsp;at&nbsp;the&nbsp;fault&nbsp;of&nbsp;the&nbsp;Landlord.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__68">n</a>
                      </td>
                      <td class="diff_header" id="from0_453">
                        453
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">____</span>
                        &nbsp;Tenant&nbsp;shall&nbsp;receive&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;on&nbsp;the&nbsp;date&nbsp;of&nbsp;delivery&nbsp;and&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__68">n</a>
                      </td>
                      <td class="diff_header" id="to0_453">
                        453
                      </td>
                      <td nowrap="nowrap">
                        <span class="diff_chg">9.2.</span>
                        &nbsp;Tenant&nbsp;shall&nbsp;receive&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;on&nbsp;the&nbsp;date&nbsp;of&nbsp;delivery&nbsp;and&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_454">
                        454
                      </td>
                      <td nowrap="nowrap">
                        acceptance&nbsp;of&nbsp;the&nbsp;Premises.&nbsp;The&nbsp;number&nbsp;of&nbsp;remote&nbsp;controls/parking&nbsp;card&nbsp;shall&nbsp;correspond&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_454">
                        454
                      </td>
                      <td nowrap="nowrap">
                        acceptance&nbsp;of&nbsp;the&nbsp;Premises.&nbsp;The&nbsp;number&nbsp;of&nbsp;remote&nbsp;controls/parking&nbsp;card&nbsp;shall&nbsp;correspond&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_455">
                        455
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;the&nbsp;number&nbsp;of&nbsp;parking&nbsp;places&nbsp;designated&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;The&nbsp;cost&nbsp;of&nbsp;any&nbsp;additional&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_455">
                        455
                      </td>
                      <td nowrap="nowrap">
                        to&nbsp;the&nbsp;number&nbsp;of&nbsp;parking&nbsp;places&nbsp;designated&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;The&nbsp;cost&nbsp;of&nbsp;any&nbsp;additional&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__68"></td>
                      <td class="diff_header" id="from0_456">
                        456
                      </td>
                      <td nowrap="nowrap">
                        remote&nbsp;control/parking&nbsp;card&nbsp;shall&nbsp;be&nbsp;at&nbsp;Tenant's&nbsp;expense.&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_456">
                        456
                      </td>
                      <td nowrap="nowrap">
                        remote&nbsp;control/parking&nbsp;card&nbsp;shall&nbsp;be&nbsp;at&nbsp;Tenant's&nbsp;expense.&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_457">
                        457
                      </td>
                      <td nowrap="nowrap">
                        inform&nbsp;Landlord&nbsp;in&nbsp;writing&nbsp;of&nbsp;every&nbsp;additional&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;which&nbsp;is&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_457">
                        457
                      </td>
                      <td nowrap="nowrap">
                        inform&nbsp;Landlord&nbsp;in&nbsp;writing&nbsp;of&nbsp;every&nbsp;additional&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;which&nbsp;is&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_458">
                        458
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;possession.&nbsp;All&nbsp;remote&nbsp;controls/parking&nbsp;cards&nbsp;shall&nbsp;be&nbsp;returned&nbsp;to&nbsp;Landlord&nbsp;on&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_458">
                        458
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;possession.&nbsp;All&nbsp;remote&nbsp;controls/parking&nbsp;cards&nbsp;shall&nbsp;be&nbsp;returned&nbsp;to&nbsp;Landlord&nbsp;on&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_459">
                        459
                      </td>
                      <td nowrap="nowrap">
                        date&nbsp;of&nbsp;termination&nbsp;of&nbsp;the&nbsp;Lease.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;doubt,&nbsp;access&nbsp;control&nbsp;system&nbsp;to&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_459">
                        459
                      </td>
                      <td nowrap="nowrap">
                        date&nbsp;of&nbsp;termination&nbsp;of&nbsp;the&nbsp;Lease.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;doubt,&nbsp;access&nbsp;control&nbsp;system&nbsp;to&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__69">n</a>
                      </td>
                      <td class="diff_header" id="from0_460">
                        460
                      </td>
                      <td nowrap="nowrap">
                        Tenant's&nbsp;Premises&nbsp;shall&nbsp;be&nbsp;done&nbsp;solely&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;at&nbsp;its&nbsp;
                        <span class="diff_sub">own&nbsp;</span>
                        ___&nbsp;expense,&nbsp;as&nbsp;part&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__69">n</a>
                      </td>
                      <td class="diff_header" id="to0_460">
                        460
                      </td>
                      <td nowrap="nowrap">
                        Tenant's&nbsp;Premises&nbsp;shall&nbsp;be&nbsp;done&nbsp;solely&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;at&nbsp;its&nbsp;___
                        <span class="diff_add">&nbsp;Own</span>
                        &nbsp;expense,&nbsp;as&nbsp;part&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_461">
                        461
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;fit-out&nbsp;works,&nbsp;except&nbsp;otherwise&nbsp;stated&nbsp;in&nbsp;the&nbsp;Lease&nbsp;or&nbsp;Parties&nbsp;mutually&nbsp;agree&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_461">
                        461
                      </td>
                      <td nowrap="nowrap">
                        its&nbsp;fit-out&nbsp;works,&nbsp;except&nbsp;otherwise&nbsp;stated&nbsp;in&nbsp;the&nbsp;Lease&nbsp;or&nbsp;Parties&nbsp;mutually&nbsp;agree&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_462">
                        462
                      </td>
                      <td nowrap="nowrap">
                        afterwards.&nbsp;There&nbsp;will&nbsp;be&nbsp;no&nbsp;electronic&nbsp;access&nbsp;control&nbsp;to&nbsp;the&nbsp;Building&nbsp;apart&nbsp;from&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_462">
                        462
                      </td>
                      <td nowrap="nowrap">
                        afterwards.&nbsp;There&nbsp;will&nbsp;be&nbsp;no&nbsp;electronic&nbsp;access&nbsp;control&nbsp;to&nbsp;the&nbsp;Building&nbsp;apart&nbsp;from&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_463">
                        463
                      </td>
                      <td nowrap="nowrap">
                        security&nbsp;desk.&nbsp;Tenant&nbsp;is&nbsp;obliged&nbsp;to&nbsp;deliver&nbsp;information&nbsp;about&nbsp;vehicle&nbsp;(register&nbsp;number,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_463">
                        463
                      </td>
                      <td nowrap="nowrap">
                        security&nbsp;desk.&nbsp;Tenant&nbsp;is&nbsp;obliged&nbsp;to&nbsp;deliver&nbsp;information&nbsp;about&nbsp;vehicle&nbsp;(register&nbsp;number,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_464">
                        464
                      </td>
                      <td nowrap="nowrap">
                        type&nbsp;and&nbsp;model,&nbsp;vehicle&nbsp;description)&nbsp;for&nbsp;which&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;is&nbsp;being&nbsp;used.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_464">
                        464
                      </td>
                      <td nowrap="nowrap">
                        type&nbsp;and&nbsp;model,&nbsp;vehicle&nbsp;description)&nbsp;for&nbsp;which&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;is&nbsp;being&nbsp;used.&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__69"></td>
                      <td class="diff_header" id="from0_467">
                        467
                      </td>
                      <td nowrap="nowrap">
                        General&nbsp;conditions&nbsp;for&nbsp;use&nbsp;of&nbsp;parking&nbsp;places&nbsp;in&nbsp;Avenue&nbsp;Mall&nbsp;garage&nbsp;for&nbsp;longer&nbsp;period.&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_467">
                        467
                      </td>
                      <td nowrap="nowrap">
                        General&nbsp;conditions&nbsp;for&nbsp;use&nbsp;of&nbsp;parking&nbsp;places&nbsp;in&nbsp;Avenue&nbsp;Mall&nbsp;garage&nbsp;for&nbsp;longer&nbsp;period.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_468">
                        468
                      </td>
                      <td nowrap="nowrap">
                        Loss&nbsp;and&nbsp;issuance&nbsp;of&nbsp;new&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;in&nbsp;the&nbsp;amount&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_468">
                        468
                      </td>
                      <td nowrap="nowrap">
                        Loss&nbsp;and&nbsp;issuance&nbsp;of&nbsp;new&nbsp;remote&nbsp;control/parking&nbsp;card&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;pay&nbsp;in&nbsp;the&nbsp;amount&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__70"></td>
                      <td class="diff_header" id="from0_469">
                        469
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;55&nbsp;EUR&nbsp;(fifty&nbsp;five&nbsp;euro)&nbsp;each.&nbsp;The&nbsp;Landlord&nbsp;may,&nbsp;at&nbsp;any&nbsp;time&nbsp;during&nbsp;the&nbsp;Term&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_469">
                        469
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;55&nbsp;EUR&nbsp;(fifty&nbsp;five&nbsp;euro)&nbsp;each.&nbsp;The&nbsp;Landlord&nbsp;may,&nbsp;at&nbsp;any&nbsp;time&nbsp;during&nbsp;the&nbsp;Term&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_470">
                        470
                      </td>
                      <td nowrap="nowrap">
                        Lease&nbsp;may&nbsp;replace&nbsp;remote&nbsp;controls/parking&nbsp;cards&nbsp;in&nbsp;Tenant’s&nbsp;possession&nbsp;for&nbsp;new&nbsp;_&nbsp;ones,&nbsp;on&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_470">
                        470
                      </td>
                      <td nowrap="nowrap">
                        Lease&nbsp;may&nbsp;replace&nbsp;remote&nbsp;controls/parking&nbsp;cards&nbsp;in&nbsp;Tenant’s&nbsp;possession&nbsp;for&nbsp;new&nbsp;_&nbsp;ones,&nbsp;on&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__70">n</a>
                      </td>
                      <td class="diff_header" id="from0_471">
                        471
                      </td>
                      <td nowrap="nowrap">
                        Landlord’s&nbsp;cost.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;not&nbsp;assign&nbsp;any&nbsp;of&nbsp;the&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;rights&nbsp;arising&nbsp;from&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__70">n</a>
                      </td>
                      <td class="diff_header" id="to0_471">
                        471
                      </td>
                      <td nowrap="nowrap">
                        Landlord’s&nbsp;cost.&nbsp;
                        <span class="diff_chg">9.3.</span>
                        &nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;not&nbsp;assign&nbsp;any&nbsp;of&nbsp;the&nbsp;
                        <span class="diff_chg">§10.</span>
                        &nbsp;rights&nbsp;arising&nbsp;from&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_472">
                        472
                      </td>
                      <td nowrap="nowrap">
                        this&nbsp;Lease,&nbsp;underlet,&nbsp;share,&nbsp;or&nbsp;part&nbsp;with&nbsp;possession&nbsp;or&nbsp;occupation&nbsp;of&nbsp;all&nbsp;or&nbsp;part&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_472">
                        472
                      </td>
                      <td nowrap="nowrap">
                        this&nbsp;Lease,&nbsp;underlet,&nbsp;share,&nbsp;or&nbsp;part&nbsp;with&nbsp;possession&nbsp;or&nbsp;occupation&nbsp;of&nbsp;all&nbsp;or&nbsp;part&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__71">n</a>
                      </td>
                      <td class="diff_header" id="from0_473">
                        473
                      </td>
                      <td nowrap="nowrap">
                        Leased&nbsp;Area&nbsp;without&nbsp;the&nbsp;prior&nbsp;written&nbsp;consent&nbsp;of&nbsp;the&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">§10.</span>
                        &nbsp;Maintenance,&nbsp;Repair&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__71">n</a>
                      </td>
                      <td class="diff_header" id="to0_473">
                        473
                      </td>
                      <td nowrap="nowrap">
                        Leased&nbsp;Area&nbsp;without&nbsp;the&nbsp;prior&nbsp;written&nbsp;consent&nbsp;of&nbsp;the&nbsp;Landlord.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;Maintenance,&nbsp;Repair&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_474">
                        474
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;Alteration&nbsp;of&nbsp;the&nbsp;Premises&nbsp;by&nbsp;Tenant&nbsp;
                        <span class="diff_chg">____&nbsp;____</span>
                        &nbsp;No&nbsp;alteration&nbsp;in&nbsp;the&nbsp;construction,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_474">
                        474
                      </td>
                      <td nowrap="nowrap">
                        and&nbsp;Alteration&nbsp;of&nbsp;the&nbsp;Premises&nbsp;by&nbsp;Tenant&nbsp;
                        <span class="diff_chg">10.1&nbsp;10.2</span>
                        &nbsp;No&nbsp;alteration&nbsp;in&nbsp;the&nbsp;construction,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_475">
                        475
                      </td>
                      <td nowrap="nowrap">
                        location&nbsp;or&nbsp;use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;specified&nbsp;under&nbsp;Exhibit&nbsp;#2&nbsp;shall&nbsp;be&nbsp;permitted&nbsp;unless&nbsp;a&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_475">
                        475
                      </td>
                      <td nowrap="nowrap">
                        location&nbsp;or&nbsp;use&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;specified&nbsp;under&nbsp;Exhibit&nbsp;#2&nbsp;shall&nbsp;be&nbsp;permitted&nbsp;unless&nbsp;a&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_476">
                        476
                      </td>
                      <td nowrap="nowrap">
                        prior&nbsp;written&nbsp;approval&nbsp;has&nbsp;been&nbsp;obtained&nbsp;from&nbsp;the&nbsp;Landlord.&nbsp;Applying&nbsp;for&nbsp;the&nbsp;Landlord's&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_476">
                        476
                      </td>
                      <td nowrap="nowrap">
                        prior&nbsp;written&nbsp;approval&nbsp;has&nbsp;been&nbsp;obtained&nbsp;from&nbsp;the&nbsp;Landlord.&nbsp;Applying&nbsp;for&nbsp;the&nbsp;Landlord's&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_477">
                        477
                      </td>
                      <td nowrap="nowrap">
                        approval&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;supply&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;all&nbsp;plans&nbsp;and&nbsp;specifications&nbsp;of&nbsp;all&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_477">
                        477
                      </td>
                      <td nowrap="nowrap">
                        approval&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;supply&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;all&nbsp;plans&nbsp;and&nbsp;specifications&nbsp;of&nbsp;all&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__71"></td>
                      <td class="diff_header" id="from0_478">
                        478
                      </td>
                      <td nowrap="nowrap">
                        works&nbsp;intended&nbsp;to&nbsp;be&nbsp;performed&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;and&nbsp;it&nbsp;shall&nbsp;carry&nbsp;out&nbsp;such&nbsp;works&nbsp;only&nbsp;in&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_478">
                        478
                      </td>
                      <td nowrap="nowrap">
                        works&nbsp;intended&nbsp;to&nbsp;be&nbsp;performed&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;and&nbsp;it&nbsp;shall&nbsp;carry&nbsp;out&nbsp;such&nbsp;works&nbsp;only&nbsp;in&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_479">
                        479
                      </td>
                      <td nowrap="nowrap">
                        accordance&nbsp;with&nbsp;such&nbsp;plans&nbsp;and&nbsp;specifications&nbsp;as&nbsp;approved&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;in&nbsp;writing&nbsp;and&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_479">
                        479
                      </td>
                      <td nowrap="nowrap">
                        accordance&nbsp;with&nbsp;such&nbsp;plans&nbsp;and&nbsp;specifications&nbsp;as&nbsp;approved&nbsp;by&nbsp;the&nbsp;Landlord&nbsp;in&nbsp;writing&nbsp;and&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_480">
                        480
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;compliance&nbsp;with&nbsp;the&nbsp;requirements&nbsp;of&nbsp;the&nbsp;Landlord&nbsp;communicated&nbsp;to&nbsp;it.&nbsp;If&nbsp;any&nbsp;approvals&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_480">
                        480
                      </td>
                      <td nowrap="nowrap">
                        in&nbsp;compliance&nbsp;with&nbsp;the&nbsp;requirements&nbsp;of&nbsp;the&nbsp;Landlord&nbsp;communicated&nbsp;to&nbsp;it.&nbsp;If&nbsp;any&nbsp;approvals&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_481">
                        481
                      </td>
                      <td nowrap="nowrap">
                        should&nbsp;be&nbsp;required&nbsp;from&nbsp;the&nbsp;local&nbsp;or&nbsp;other&nbsp;authorities&nbsp;in&nbsp;order&nbsp;to&nbsp;introduce&nbsp;any&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_481">
                        481
                      </td>
                      <td nowrap="nowrap">
                        should&nbsp;be&nbsp;required&nbsp;from&nbsp;the&nbsp;local&nbsp;or&nbsp;other&nbsp;authorities&nbsp;in&nbsp;order&nbsp;to&nbsp;introduce&nbsp;any&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__72">n</a>
                      </td>
                      <td class="diff_header" id="from0_482">
                        482
                      </td>
                      <td nowrap="nowrap">
                        alterations&nbsp;in&nbsp;
                        <span class="diff_chg">____&nbsp;____&nbsp;____</span>
                        &nbsp;the&nbsp;use&nbsp;or&nbsp;the&nbsp;construction&nbsp;of&nbsp;the&nbsp;Premises&nbsp;as&nbsp;requested&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__72">n</a>
                      </td>
                      <td class="diff_header" id="to0_482">
                        482
                      </td>
                      <td nowrap="nowrap">
                        alterations&nbsp;in&nbsp;
                        <span class="diff_chg">10.3&nbsp;10.4&nbsp;10.5</span>
                        &nbsp;the&nbsp;use&nbsp;or&nbsp;the&nbsp;construction&nbsp;of&nbsp;the&nbsp;Premises&nbsp;as&nbsp;requested&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_483">
                        483
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;according&nbsp;to&nbsp;Clause&nbsp;10.1&nbsp;above,&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;responsible&nbsp;for&nbsp;obtaining&nbsp;such&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_483">
                        483
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;according&nbsp;to&nbsp;Clause&nbsp;10.1&nbsp;above,&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;responsible&nbsp;for&nbsp;obtaining&nbsp;such&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__72"></td>
                      <td class="diff_header" id="from0_484">
                        484
                      </td>
                      <td nowrap="nowrap">
                        approvals&nbsp;at&nbsp;its&nbsp;own&nbsp;cost&nbsp;and&nbsp;risk.&nbsp;After&nbsp;receiving&nbsp;the&nbsp;necessary&nbsp;approvals&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_484">
                        484
                      </td>
                      <td nowrap="nowrap">
                        approvals&nbsp;at&nbsp;its&nbsp;own&nbsp;cost&nbsp;and&nbsp;risk.&nbsp;After&nbsp;receiving&nbsp;the&nbsp;necessary&nbsp;approvals&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_485">
                        485
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;complete&nbsp;the&nbsp;alteration&nbsp;works&nbsp;within&nbsp;such&nbsp;period&nbsp;as&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;stipulate&nbsp;in&nbsp;a&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_485">
                        485
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;complete&nbsp;the&nbsp;alteration&nbsp;works&nbsp;within&nbsp;such&nbsp;period&nbsp;as&nbsp;the&nbsp;Landlord&nbsp;may&nbsp;stipulate&nbsp;in&nbsp;a&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_486">
                        486
                      </td>
                      <td nowrap="nowrap">
                        good&nbsp;and&nbsp;workmanlike&nbsp;manner.&nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;reimburse&nbsp;all&nbsp;costs&nbsp;and&nbsp;expenses&nbsp;incurred&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_486">
                        486
                      </td>
                      <td nowrap="nowrap">
                        good&nbsp;and&nbsp;workmanlike&nbsp;manner.&nbsp;The&nbsp;Tenant&nbsp;shall&nbsp;reimburse&nbsp;all&nbsp;costs&nbsp;and&nbsp;expenses&nbsp;incurred&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_487">
                        487
                      </td>
                      <td nowrap="nowrap">
                        by&nbsp;the&nbsp;Landlord&nbsp;in&nbsp;connection&nbsp;with&nbsp;the&nbsp;alteration&nbsp;works&nbsp;requested&nbsp;by&nbsp;the&nbsp;Tenant.&nbsp;If&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_487">
                        487
                      </td>
                      <td nowrap="nowrap">
                        by&nbsp;the&nbsp;Landlord&nbsp;in&nbsp;connection&nbsp;with&nbsp;the&nbsp;alteration&nbsp;works&nbsp;requested&nbsp;by&nbsp;the&nbsp;Tenant.&nbsp;If&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__73">n</a>
                      </td>
                      <td class="diff_header" id="from0_488">
                        488
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;fails&nbsp;to&nbsp;observe&nbsp;the&nbsp;covenants&nbsp;contained&nbsp;in&nbsp;Clauses&nbsp;10.1-10.3
                        <span class="diff_sub">&nbsp;_____&nbsp;____</span>
                        &nbsp;above&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__73">n</a>
                      </td>
                      <td class="diff_header" id="to0_488">
                        488
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;fails&nbsp;to&nbsp;observe&nbsp;the&nbsp;covenants&nbsp;contained&nbsp;in&nbsp;Clauses&nbsp;
                        <span class="diff_add">_________&nbsp;</span>10.1-
                        <span class="diff_add">&nbsp;</span>
                        10.3&nbsp;above&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_489">
                        489
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;may&nbsp;enter&nbsp;the&nbsp;Premises&nbsp;and&nbsp;reinstate&nbsp;or&nbsp;remove&nbsp;any&nbsp;unauthorized&nbsp;alterations&nbsp;or&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_489">
                        489
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;may&nbsp;enter&nbsp;the&nbsp;Premises&nbsp;and&nbsp;reinstate&nbsp;or&nbsp;remove&nbsp;any&nbsp;unauthorized&nbsp;alterations&nbsp;or&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_490">
                        490
                      </td>
                      <td nowrap="nowrap">
                        additions&nbsp;and&nbsp;make&nbsp;good&nbsp;all&nbsp;damage&nbsp;caused&nbsp;thereby&nbsp;the&nbsp;cost&nbsp;of&nbsp;which&nbsp;work&nbsp;shall&nbsp;be&nbsp;paid&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_490">
                        490
                      </td>
                      <td nowrap="nowrap">
                        additions&nbsp;and&nbsp;make&nbsp;good&nbsp;all&nbsp;damage&nbsp;caused&nbsp;thereby&nbsp;the&nbsp;cost&nbsp;of&nbsp;which&nbsp;work&nbsp;shall&nbsp;be&nbsp;paid&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_491">
                        491
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant,&nbsp;or&nbsp;in&nbsp;case&nbsp;of&nbsp;failure&nbsp;thereof,&nbsp;may&nbsp;be&nbsp;drawn&nbsp;from&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;by&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_491">
                        491
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant,&nbsp;or&nbsp;in&nbsp;case&nbsp;of&nbsp;failure&nbsp;thereof,&nbsp;may&nbsp;be&nbsp;drawn&nbsp;from&nbsp;the&nbsp;bank&nbsp;guarantee&nbsp;by&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_492">
                        492
                      </td>
                      <td nowrap="nowrap">
                        Landlord.&nbsp;Tenant&nbsp;shall&nbsp;keep&nbsp;the&nbsp;Premises&nbsp;at&nbsp;its&nbsp;own&nbsp;cost&nbsp;in&nbsp;good&nbsp;repair;&nbsp;redecorate&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_492">
                        492
                      </td>
                      <td nowrap="nowrap">
                        Landlord.&nbsp;Tenant&nbsp;shall&nbsp;keep&nbsp;the&nbsp;Premises&nbsp;at&nbsp;its&nbsp;own&nbsp;cost&nbsp;in&nbsp;good&nbsp;repair;&nbsp;redecorate&nbsp;the&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__73"></td>
                      <td class="diff_header" id="from0_495">
                        495
                      </td>
                      <td nowrap="nowrap">
                        repairs.&nbsp;Tenant&nbsp;shall&nbsp;remedy&nbsp;any&nbsp;damages&nbsp;in&nbsp;the&nbsp;Premises,&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site,&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_495">
                        495
                      </td>
                      <td nowrap="nowrap">
                        repairs.&nbsp;Tenant&nbsp;shall&nbsp;remedy&nbsp;any&nbsp;damages&nbsp;in&nbsp;the&nbsp;Premises,&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site,&nbsp;for&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_496">
                        496
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;it&nbsp;is&nbsp;responsible&nbsp;under&nbsp;this&nbsp;Agreement.&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;remedy&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_496">
                        496
                      </td>
                      <td nowrap="nowrap">
                        which&nbsp;it&nbsp;is&nbsp;responsible&nbsp;under&nbsp;this&nbsp;Agreement.&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;remedy&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_497">
                        497
                      </td>
                      <td nowrap="nowrap">
                        damages&nbsp;in&nbsp;two&nbsp;weeks&nbsp;time.&nbsp;In&nbsp;case&nbsp;of&nbsp;disputes&nbsp;between&nbsp;the&nbsp;Parties&nbsp;about&nbsp;the&nbsp;nature&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_497">
                        497
                      </td>
                      <td nowrap="nowrap">
                        damages&nbsp;in&nbsp;two&nbsp;weeks&nbsp;time.&nbsp;In&nbsp;case&nbsp;of&nbsp;disputes&nbsp;between&nbsp;the&nbsp;Parties&nbsp;about&nbsp;the&nbsp;nature&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_498">
                        498
                      </td>
                      <td nowrap="nowrap">
                        said&nbsp;works&nbsp;or&nbsp;damages,&nbsp;the&nbsp;procedure&nbsp;as&nbsp;described&nbsp;in&nbsp;Clause&nbsp;14.2&nbsp;shall&nbsp;apply.&nbsp;Any&nbsp;remedy&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_498">
                        498
                      </td>
                      <td nowrap="nowrap">
                        said&nbsp;works&nbsp;or&nbsp;damages,&nbsp;the&nbsp;procedure&nbsp;as&nbsp;described&nbsp;in&nbsp;Clause&nbsp;14.2&nbsp;shall&nbsp;apply.&nbsp;Any&nbsp;remedy&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__74">n</a>
                      </td>
                      <td class="diff_header" id="from0_499">
                        499
                      </td>
                      <td nowrap="nowrap">
                        works&nbsp;may&nbsp;only&nbsp;be&nbsp;performed&nbsp;by&nbsp;specialist&nbsp;
                        <span class="diff_chg">____&nbsp;____</span>
                        &nbsp;contractors&nbsp;approved&nbsp;by&nbsp;the&nbsp;Landlord.&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__74">n</a>
                      </td>
                      <td class="diff_header" id="to0_499">
                        499
                      </td>
                      <td nowrap="nowrap">
                        works&nbsp;may&nbsp;only&nbsp;be&nbsp;performed&nbsp;by&nbsp;specialist&nbsp;
                        <span class="diff_chg">10.6&nbsp;10.7</span>
                        &nbsp;contractors&nbsp;approved&nbsp;by&nbsp;the&nbsp;Landlord.&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_500">
                        500
                      </td>
                      <td nowrap="nowrap">
                        The&nbsp;Tenant&nbsp;shall&nbsp;also&nbsp;be&nbsp;responsible&nbsp;for&nbsp;and&nbsp;shall&nbsp;perform&nbsp;at&nbsp;its&nbsp;own&nbsp;cost:&nbsp;(i)&nbsp;repairs&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_500">
                        500
                      </td>
                      <td nowrap="nowrap">
                        The&nbsp;Tenant&nbsp;shall&nbsp;also&nbsp;be&nbsp;responsible&nbsp;for&nbsp;and&nbsp;shall&nbsp;perform&nbsp;at&nbsp;its&nbsp;own&nbsp;cost:&nbsp;(i)&nbsp;repairs&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_501">
                        501
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Tenant’s&nbsp;works&nbsp;and&nbsp;(ii)&nbsp;repairs&nbsp;of&nbsp;equipment&nbsp;it&nbsp;has&nbsp;installed,&nbsp;whereas&nbsp;(iii)&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_501">
                        501
                      </td>
                      <td nowrap="nowrap">
                        of&nbsp;the&nbsp;Tenant’s&nbsp;works&nbsp;and&nbsp;(ii)&nbsp;repairs&nbsp;of&nbsp;equipment&nbsp;it&nbsp;has&nbsp;installed,&nbsp;whereas&nbsp;(iii)&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_502">
                        502
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;will&nbsp;perform&nbsp;the&nbsp;repairs&nbsp;of&nbsp;technical&nbsp;facilities&nbsp;in&nbsp;the&nbsp;Premises,&nbsp;also&nbsp;at&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_502">
                        502
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;will&nbsp;perform&nbsp;the&nbsp;repairs&nbsp;of&nbsp;technical&nbsp;facilities&nbsp;in&nbsp;the&nbsp;Premises,&nbsp;also&nbsp;at&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_503">
                        503
                      </td>
                      <td nowrap="nowrap">
                        Tenant’s&nbsp;cost.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;any&nbsp;doubt,&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;responsible&nbsp;for&nbsp;regular&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_503">
                        503
                      </td>
                      <td nowrap="nowrap">
                        Tenant’s&nbsp;cost.&nbsp;For&nbsp;avoidance&nbsp;of&nbsp;any&nbsp;doubt,&nbsp;the&nbsp;Tenant&nbsp;is&nbsp;responsible&nbsp;for&nbsp;regular&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__74"></td>
                      <td class="diff_header" id="from0_529">
                        529
                      </td>
                      <td nowrap="nowrap">
                        investment&nbsp;made&nbsp;in&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;remain&nbsp;in&nbsp;Landlord’s&nbsp;ownership,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_529">
                        529
                      </td>
                      <td nowrap="nowrap">
                        investment&nbsp;made&nbsp;in&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;by&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;remain&nbsp;in&nbsp;Landlord’s&nbsp;ownership,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_530">
                        530
                      </td>
                      <td nowrap="nowrap">
                        except&nbsp;if&nbsp;it&nbsp;does&nbsp;not&nbsp;decrease&nbsp;the&nbsp;value&nbsp;and&nbsp;adaptability&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area.&nbsp;All&nbsp;keys&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_530">
                        530
                      </td>
                      <td nowrap="nowrap">
                        except&nbsp;if&nbsp;it&nbsp;does&nbsp;not&nbsp;decrease&nbsp;the&nbsp;value&nbsp;and&nbsp;adaptability&nbsp;of&nbsp;the&nbsp;Leased&nbsp;Area.&nbsp;All&nbsp;keys&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_531">
                        531
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Leased&nbsp;Area&nbsp;shall&nbsp;be&nbsp;returned&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;on&nbsp;the&nbsp;Termination&nbsp;Date.&nbsp;In&nbsp;the&nbsp;event&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_531">
                        531
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Leased&nbsp;Area&nbsp;shall&nbsp;be&nbsp;returned&nbsp;to&nbsp;the&nbsp;Landlord&nbsp;on&nbsp;the&nbsp;Termination&nbsp;Date.&nbsp;In&nbsp;the&nbsp;event&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_532">
                        532
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;keys&nbsp;are&nbsp;not&nbsp;returned&nbsp;on&nbsp;such&nbsp;date,&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;be&nbsp;entitled&nbsp;to&nbsp;open&nbsp;the&nbsp;Leased&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_532">
                        532
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;keys&nbsp;are&nbsp;not&nbsp;returned&nbsp;on&nbsp;such&nbsp;date,&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;be&nbsp;entitled&nbsp;to&nbsp;open&nbsp;the&nbsp;Leased&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__75">n</a>
                      </td>
                      <td class="diff_header" id="from0_533">
                        533
                      </td>
                      <td nowrap="nowrap">
                        Area&nbsp;and&nbsp;change&nbsp;locks&nbsp;to&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;at&nbsp;the&nbsp;Tenant’s&nbsp;expense.&nbsp;
                        <span class="diff_chg">____&nbsp;____</span>
                        &nbsp;If,&nbsp;upon&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__75">n</a>
                      </td>
                      <td class="diff_header" id="to0_533">
                        533
                      </td>
                      <td nowrap="nowrap">
                        Area&nbsp;and&nbsp;change&nbsp;locks&nbsp;to&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;at&nbsp;the&nbsp;Tenant’s&nbsp;expense.&nbsp;
                        <span class="diff_chg">10.8&nbsp;§11.</span>
                        &nbsp;If,&nbsp;upon&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_534">
                        534
                      </td>
                      <td nowrap="nowrap">
                        Termination&nbsp;Date,&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;remove&nbsp;his&nbsp;belongings&nbsp;from&nbsp;the&nbsp;Premises,&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_534">
                        534
                      </td>
                      <td nowrap="nowrap">
                        Termination&nbsp;Date,&nbsp;the&nbsp;Tenant&nbsp;does&nbsp;not&nbsp;remove&nbsp;his&nbsp;belongings&nbsp;from&nbsp;the&nbsp;Premises,&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_535">
                        535
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;may&nbsp;remove&nbsp;and&nbsp;deposit&nbsp;all&nbsp;such&nbsp;belongings&nbsp;in&nbsp;a&nbsp;storage&nbsp;area&nbsp;at&nbsp;the&nbsp;expense&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_535">
                        535
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;may&nbsp;remove&nbsp;and&nbsp;deposit&nbsp;all&nbsp;such&nbsp;belongings&nbsp;in&nbsp;a&nbsp;storage&nbsp;area&nbsp;at&nbsp;the&nbsp;expense&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_536">
                        536
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant.&nbsp;The&nbsp;Landlord&nbsp;will&nbsp;notify&nbsp;the&nbsp;Tenant&nbsp;about&nbsp;the&nbsp;cost&nbsp;of&nbsp;removal&nbsp;and&nbsp;storage&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_536">
                        536
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant.&nbsp;The&nbsp;Landlord&nbsp;will&nbsp;notify&nbsp;the&nbsp;Tenant&nbsp;about&nbsp;the&nbsp;cost&nbsp;of&nbsp;removal&nbsp;and&nbsp;storage&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_537">
                        537
                      </td>
                      <td nowrap="nowrap">
                        (per&nbsp;day)&nbsp;and&nbsp;the&nbsp;location&nbsp;of&nbsp;the&nbsp;storage,&nbsp;and&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;not&nbsp;charge&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_537">
                        537
                      </td>
                      <td nowrap="nowrap">
                        (per&nbsp;day)&nbsp;and&nbsp;the&nbsp;location&nbsp;of&nbsp;the&nbsp;storage,&nbsp;and&nbsp;the&nbsp;Landlord&nbsp;shall&nbsp;not&nbsp;charge&nbsp;the&nbsp;Tenant&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__75"></td>
                      <td class="diff_header" id="from0_543">
                        543
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Site&nbsp;by&nbsp;Tenant&nbsp;itself,&nbsp;its&nbsp;employees,&nbsp;agents,&nbsp;representatives,&nbsp;contractors&nbsp;or&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_543">
                        543
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Site&nbsp;by&nbsp;Tenant&nbsp;itself,&nbsp;its&nbsp;employees,&nbsp;agents,&nbsp;representatives,&nbsp;contractors&nbsp;or&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_544">
                        544
                      </td>
                      <td nowrap="nowrap">
                        visitors,&nbsp;save&nbsp;for&nbsp;normal&nbsp;wear&nbsp;and&nbsp;tear.&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;liable&nbsp;with&nbsp;respect&nbsp;to&nbsp;any&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_544">
                        544
                      </td>
                      <td nowrap="nowrap">
                        visitors,&nbsp;save&nbsp;for&nbsp;normal&nbsp;wear&nbsp;and&nbsp;tear.&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;liable&nbsp;with&nbsp;respect&nbsp;to&nbsp;any&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_545">
                        545
                      </td>
                      <td nowrap="nowrap">
                        damages&nbsp;caused&nbsp;by&nbsp;the&nbsp;improper&nbsp;use&nbsp;of&nbsp;such&nbsp;facilities&nbsp;as&nbsp;the&nbsp;water&nbsp;supply,&nbsp;drainage,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_545">
                        545
                      </td>
                      <td nowrap="nowrap">
                        damages&nbsp;caused&nbsp;by&nbsp;the&nbsp;improper&nbsp;use&nbsp;of&nbsp;such&nbsp;facilities&nbsp;as&nbsp;the&nbsp;water&nbsp;supply,&nbsp;drainage,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_546">
                        546
                      </td>
                      <td nowrap="nowrap">
                        lighting&nbsp;or&nbsp;power&nbsp;supply&nbsp;lines,&nbsp;as&nbsp;well&nbsp;as&nbsp;sanitary,&nbsp;heating&nbsp;and&nbsp;_&nbsp;ventilation&nbsp;i
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_546">
                        546
                      </td>
                      <td nowrap="nowrap">
                        lighting&nbsp;or&nbsp;power&nbsp;supply&nbsp;lines,&nbsp;as&nbsp;well&nbsp;as&nbsp;sanitary,&nbsp;heating&nbsp;and&nbsp;_&nbsp;ventilation&nbsp;i
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__76">n</a>
                      </td>
                      <td class="diff_header" id="from0_547">
                        547
                      </td>
                      <td nowrap="nowrap">
                        nstallations.&nbsp;<span class="diff_chg">§11.</span>
                        &nbsp;Repairs&nbsp;and&nbsp;Structural&nbsp;Alterations&nbsp;in&nbsp;the&nbsp;Premises&nbsp;and&nbsp;Building&nbsp;by&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__76">n</a>
                      </td>
                      <td class="diff_header" id="to0_547">
                        547
                      </td>
                      <td nowrap="nowrap">
                        nstallations.&nbsp;<span class="diff_chg">____</span>
                        &nbsp;Repairs&nbsp;and&nbsp;Structural&nbsp;Alterations&nbsp;in&nbsp;the&nbsp;Premises&nbsp;and&nbsp;Building&nbsp;by&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_548">
                        548
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;<span class="diff_chg">____</span>
                        &nbsp;Landlord&nbsp;may&nbsp;arrange&nbsp;at&nbsp;his&nbsp;expense&nbsp;for&nbsp;remedial&nbsp;work&nbsp;or&nbsp;structural&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_548">
                        548
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;<span class="diff_chg">11.1</span>
                        &nbsp;Landlord&nbsp;may&nbsp;arrange&nbsp;at&nbsp;his&nbsp;expense&nbsp;for&nbsp;remedial&nbsp;work&nbsp;or&nbsp;structural&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_549">
                        549
                      </td>
                      <td nowrap="nowrap">
                        alterations&nbsp;to&nbsp;be&nbsp;carried&nbsp;out&nbsp;in&nbsp;the&nbsp;Premises&nbsp;without&nbsp;the&nbsp;consent&nbsp;of&nbsp;Tenant&nbsp;in&nbsp;order&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_549">
                        549
                      </td>
                      <td nowrap="nowrap">
                        alterations&nbsp;to&nbsp;be&nbsp;carried&nbsp;out&nbsp;in&nbsp;the&nbsp;Premises&nbsp;without&nbsp;the&nbsp;consent&nbsp;of&nbsp;Tenant&nbsp;in&nbsp;order&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_550">
                        550
                      </td>
                      <td nowrap="nowrap">
                        prevent&nbsp;dangers.&nbsp;Such&nbsp;emergency&nbsp;remedial&nbsp;work&nbsp;shall&nbsp;be&nbsp;performed&nbsp;as&nbsp;soon&nbsp;as&nbsp;possible,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_550">
                        550
                      </td>
                      <td nowrap="nowrap">
                        prevent&nbsp;dangers.&nbsp;Such&nbsp;emergency&nbsp;remedial&nbsp;work&nbsp;shall&nbsp;be&nbsp;performed&nbsp;as&nbsp;soon&nbsp;as&nbsp;possible,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_551">
                        551
                      </td>
                      <td nowrap="nowrap">
                        however,&nbsp;within&nbsp;the&nbsp;maximum&nbsp;of&nbsp;48&nbsp;(forty&nbsp;eight)&nbsp;hour's&nbsp;period,&nbsp;after&nbsp;which&nbsp;the&nbsp;Premises&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_551">
                        551
                      </td>
                      <td nowrap="nowrap">
                        however,&nbsp;within&nbsp;the&nbsp;maximum&nbsp;of&nbsp;48&nbsp;(forty&nbsp;eight)&nbsp;hour's&nbsp;period,&nbsp;after&nbsp;which&nbsp;the&nbsp;Premises&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_552">
                        552
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;remain&nbsp;in&nbsp;workable&nbsp;condition,&nbsp;suitable&nbsp;for&nbsp;use&nbsp;by&nbsp;the&nbsp;Tenant.&nbsp;Tenant&nbsp;shall&nbsp;permit&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_552">
                        552
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;remain&nbsp;in&nbsp;workable&nbsp;condition,&nbsp;suitable&nbsp;for&nbsp;use&nbsp;by&nbsp;the&nbsp;Tenant.&nbsp;Tenant&nbsp;shall&nbsp;permit&nbsp;
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__76"></td>
                      <td class="diff_header" id="from0_555">
                        555
                      </td>
                      <td nowrap="nowrap">
                        carried&nbsp;out&nbsp;only&nbsp;upon&nbsp;a&nbsp;30&nbsp;(thirty)&nbsp;day&nbsp;prior&nbsp;written&nbsp;notice&nbsp;sent&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;The&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_555">
                        555
                      </td>
                      <td nowrap="nowrap">
                        carried&nbsp;out&nbsp;only&nbsp;upon&nbsp;a&nbsp;30&nbsp;(thirty)&nbsp;day&nbsp;prior&nbsp;written&nbsp;notice&nbsp;sent&nbsp;to&nbsp;the&nbsp;Tenant.&nbsp;The&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_556">
                        556
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;shall&nbsp;refrain&nbsp;from&nbsp;any&nbsp;unnecessary&nbsp;disturbance&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;in&nbsp;course&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_556">
                        556
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;shall&nbsp;refrain&nbsp;from&nbsp;any&nbsp;unnecessary&nbsp;disturbance&nbsp;of&nbsp;the&nbsp;Tenant&nbsp;in&nbsp;course&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_557">
                        557
                      </td>
                      <td nowrap="nowrap">
                        conducting&nbsp;such&nbsp;works.&nbsp;If&nbsp;during&nbsp;the&nbsp;performance&nbsp;of&nbsp;such&nbsp;works&nbsp;regular&nbsp;business&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_557">
                        557
                      </td>
                      <td nowrap="nowrap">
                        conducting&nbsp;such&nbsp;works.&nbsp;If&nbsp;during&nbsp;the&nbsp;performance&nbsp;of&nbsp;such&nbsp;works&nbsp;regular&nbsp;business&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_558">
                        558
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;is&nbsp;unabled&nbsp;by&nbsp;such&nbsp;work,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;pay&nbsp;the&nbsp;Rent&nbsp;for&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_558">
                        558
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;is&nbsp;unabled&nbsp;by&nbsp;such&nbsp;work,&nbsp;the&nbsp;Tenant&nbsp;shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;pay&nbsp;the&nbsp;Rent&nbsp;for&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__77">n</a>
                      </td>
                      <td class="diff_header" id="from0_559">
                        559
                      </td>
                      <td nowrap="nowrap">
                        part(s)&nbsp;of&nbsp;the&nbsp;Premises&nbsp;applicable&nbsp;for&nbsp;practical&nbsp;use.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;If&nbsp;repairs&nbsp;need&nbsp;to&nbsp;be&nbsp;carried&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__77">n</a>
                      </td>
                      <td class="diff_header" id="to0_559">
                        559
                      </td>
                      <td nowrap="nowrap">
                        part(s)&nbsp;of&nbsp;the&nbsp;Premises&nbsp;applicable&nbsp;for&nbsp;practical&nbsp;use.&nbsp;
                        <span class="diff_chg">11.2</span>
                        &nbsp;If&nbsp;repairs&nbsp;need&nbsp;to&nbsp;be&nbsp;carried&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_560">
                        560
                      </td>
                      <td nowrap="nowrap">
                        out&nbsp;due&nbsp;to&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;being&nbsp;damaged,&nbsp;not&nbsp;resulting&nbsp;from&nbsp;Tenant's&nbsp;fault,&nbsp;Landlord&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_560">
                        560
                      </td>
                      <td nowrap="nowrap">
                        out&nbsp;due&nbsp;to&nbsp;the&nbsp;Leased&nbsp;Area&nbsp;being&nbsp;damaged,&nbsp;not&nbsp;resulting&nbsp;from&nbsp;Tenant's&nbsp;fault,&nbsp;Landlord&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_561">
                        561
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;remedy&nbsp;the&nbsp;damage&nbsp;at&nbsp;its&nbsp;own&nbsp;costs&nbsp;as&nbsp;soon&nbsp;as&nbsp;possible,&nbsp;however,&nbsp;not&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_561">
                        561
                      </td>
                      <td nowrap="nowrap">
                        shall&nbsp;be&nbsp;obliged&nbsp;to&nbsp;remedy&nbsp;the&nbsp;damage&nbsp;at&nbsp;its&nbsp;own&nbsp;costs&nbsp;as&nbsp;soon&nbsp;as&nbsp;possible,&nbsp;however,&nbsp;not&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__77"></td>
                      <td class="diff_header" id="from0_562">
                        562
                      </td>
                      <td nowrap="nowrap">
                        exceeding&nbsp;two&nbsp;weeks&nbsp;time&nbsp;from&nbsp;receiving&nbsp;Tenant's&nbsp;notification,&nbsp;or&nbsp;if&nbsp;the&nbsp;nature&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_562">
                        562
                      </td>
                      <td nowrap="nowrap">
                        exceeding&nbsp;two&nbsp;weeks&nbsp;time&nbsp;from&nbsp;receiving&nbsp;Tenant's&nbsp;notification,&nbsp;or&nbsp;if&nbsp;the&nbsp;nature&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_563">
                        563
                      </td>
                      <td nowrap="nowrap">
                        defaults&nbsp;justify&nbsp;delay&nbsp;in&nbsp;their&nbsp;remedying&nbsp;in&nbsp;due&nbsp;time&nbsp;but&nbsp;in&nbsp;any&nbsp;case&nbsp;not&nbsp;longer&nbsp;than&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_563">
                        563
                      </td>
                      <td nowrap="nowrap">
                        defaults&nbsp;justify&nbsp;delay&nbsp;in&nbsp;their&nbsp;remedying&nbsp;in&nbsp;due&nbsp;time&nbsp;but&nbsp;in&nbsp;any&nbsp;case&nbsp;not&nbsp;longer&nbsp;than&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_564">
                        564
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;2&nbsp;(two)&nbsp;months&nbsp;from&nbsp;receipt&nbsp;of&nbsp;the&nbsp;Tenant's&nbsp;notice&nbsp;including&nbsp;description&nbsp;of&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_564">
                        564
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;2&nbsp;(two)&nbsp;months&nbsp;from&nbsp;receipt&nbsp;of&nbsp;the&nbsp;Tenant's&nbsp;notice&nbsp;including&nbsp;description&nbsp;of&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_565">
                        565
                      </td>
                      <td nowrap="nowrap">
                        damages.&nbsp;In&nbsp;case&nbsp;of&nbsp;disputes&nbsp;between&nbsp;the&nbsp;Parties&nbsp;about&nbsp;the&nbsp;nature&nbsp;of&nbsp;said&nbsp;works&nbsp;or&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_565">
                        565
                      </td>
                      <td nowrap="nowrap">
                        damages.&nbsp;In&nbsp;case&nbsp;of&nbsp;disputes&nbsp;between&nbsp;the&nbsp;Parties&nbsp;about&nbsp;the&nbsp;nature&nbsp;of&nbsp;said&nbsp;works&nbsp;or&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__78">
                        <a href="#difflib_chg_to0__78">n</a>
                      </td>
                      <td class="diff_header" id="from0_566">
                        566
                      </td>
                      <td nowrap="nowrap">
                        damage,&nbsp;the&nbsp;procedure&nbsp;as&nbsp;described&nbsp;in&nbsp;par.&nbsp;14.2&nbsp;shall&nbsp;apply.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;The&nbsp;Landlord&nbsp;shall&nbsp;have&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__78">n</a>
                      </td>
                      <td class="diff_header" id="to0_566">
                        566
                      </td>
                      <td nowrap="nowrap">
                        damage,&nbsp;the&nbsp;procedure&nbsp;as&nbsp;described&nbsp;in&nbsp;par.&nbsp;14.2&nbsp;shall&nbsp;apply.&nbsp;
                        <span class="diff_chg">11.3</span>
                        &nbsp;The&nbsp;Landlord&nbsp;shall&nbsp;have&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_567">
                        567
                      </td>
                      <td nowrap="nowrap">
                        an&nbsp;obligation&nbsp;to&nbsp;ensure&nbsp;throughout&nbsp;the&nbsp;Lease&nbsp;Term&nbsp;the&nbsp;performance&nbsp;of&nbsp;all&nbsp;those&nbsp;m
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_567">
                        567
                      </td>
                      <td nowrap="nowrap">
                        an&nbsp;obligation&nbsp;to&nbsp;ensure&nbsp;throughout&nbsp;the&nbsp;Lease&nbsp;Term&nbsp;the&nbsp;performance&nbsp;of&nbsp;all&nbsp;those&nbsp;m
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_568">
                        568
                      </td>
                      <td nowrap="nowrap">
                        aintenance&nbsp;and&nbsp;repairs&nbsp;of&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site&nbsp;which&nbsp;are&nbsp;not&nbsp;the&nbsp;responsibility&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_568">
                        568
                      </td>
                      <td nowrap="nowrap">
                        aintenance&nbsp;and&nbsp;repairs&nbsp;of&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site&nbsp;which&nbsp;are&nbsp;not&nbsp;the&nbsp;responsibility&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_569">
                        569
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;and&nbsp;are&nbsp;necessary&nbsp;in&nbsp;order&nbsp;to&nbsp;keep&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site&nbsp;in&nbsp;first&nbsp;class&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_569">
                        569
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Tenant&nbsp;and&nbsp;are&nbsp;necessary&nbsp;in&nbsp;order&nbsp;to&nbsp;keep&nbsp;the&nbsp;Building&nbsp;and&nbsp;the&nbsp;Site&nbsp;in&nbsp;first&nbsp;class&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__79">n</a>
                      </td>
                      <td class="diff_header" id="from0_570">
                        570
                      </td>
                      <td nowrap="nowrap">
                        condition&nbsp;and&nbsp;suitable&nbsp;for&nbsp;use&nbsp;at&nbsp;all&nbsp;times.&nbsp;
                        <span class="diff_sub">§12.&nbsp;</span>
                        ____&nbsp;Access&nbsp;to&nbsp;the&nbsp;Premises&nbsp;
                        <span class="diff_chg">____&nbsp;</span>
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__79">n</a>
                      </td>
                      <td class="diff_header" id="to0_570">
                        570
                      </td>
                      <td nowrap="nowrap">
                        condition&nbsp;and&nbsp;suitable&nbsp;for&nbsp;use&nbsp;at&nbsp;all&nbsp;times.&nbsp;____
                        <span class="diff_add">&nbsp;812.</span>
                        &nbsp;Access&nbsp;to&nbsp;the&nbsp;Premises&nbsp;
                        <span class="diff_chg">12.1&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__79"></td>
                      <td class="diff_header" id="from0_571">
                        571
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;and&nbsp;persons&nbsp;authorized&nbsp;by&nbsp;him&nbsp;shall&nbsp;have&nbsp;the&nbsp;right&nbsp;to&nbsp;access&nbsp;to&nbsp;the&nbsp;Premises&nbsp;at&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_571">
                        571
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;and&nbsp;persons&nbsp;authorized&nbsp;by&nbsp;him&nbsp;shall&nbsp;have&nbsp;the&nbsp;right&nbsp;to&nbsp;access&nbsp;to&nbsp;the&nbsp;Premises&nbsp;at&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_572">
                        572
                      </td>
                      <td nowrap="nowrap">
                        any&nbsp;time&nbsp;during&nbsp;Tenant's&nbsp;normal&nbsp;business&nbsp;hours&nbsp;upon&nbsp;a&nbsp;prior&nbsp;one&nbsp;working&nbsp;day&nbsp;written&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_572">
                        572
                      </td>
                      <td nowrap="nowrap">
                        any&nbsp;time&nbsp;during&nbsp;Tenant's&nbsp;normal&nbsp;business&nbsp;hours&nbsp;upon&nbsp;a&nbsp;prior&nbsp;one&nbsp;working&nbsp;day&nbsp;written&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_573">
                        573
                      </td>
                      <td nowrap="nowrap">
                        notice.&nbsp;In&nbsp;an&nbsp;emergency&nbsp;with&nbsp;imminent&nbsp;danger&nbsp;or&nbsp;due&nbsp;to&nbsp;the&nbsp;security&nbsp;reasons,&nbsp;access&nbsp;to&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_573">
                        573
                      </td>
                      <td nowrap="nowrap">
                        notice.&nbsp;In&nbsp;an&nbsp;emergency&nbsp;with&nbsp;imminent&nbsp;danger&nbsp;or&nbsp;due&nbsp;to&nbsp;the&nbsp;security&nbsp;reasons,&nbsp;access&nbsp;to&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_574">
                        574
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Building/Premises&nbsp;shall&nbsp;be&nbsp;permitted&nbsp;any&nbsp;time,&nbsp;day&nbsp;and&nbsp;night;&nbsp;however,&nbsp;notice&nbsp;to&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_574">
                        574
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;Building/Premises&nbsp;shall&nbsp;be&nbsp;permitted&nbsp;any&nbsp;time,&nbsp;day&nbsp;and&nbsp;night;&nbsp;however,&nbsp;notice&nbsp;to&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next" id="difflib_chg_to0__80">
                        <a href="#difflib_chg_to0__80">n</a>
                      </td>
                      <td class="diff_header" id="from0_575">
                        575
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;must&nbsp;follow&nbsp;any&nbsp;such&nbsp;action&nbsp;without&nbsp;any&nbsp;delay.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;Following&nbsp;notice&nbsp;of&nbsp;t
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__80">n</a>
                      </td>
                      <td class="diff_header" id="to0_575">
                        575
                      </td>
                      <td nowrap="nowrap">
                        Tenant&nbsp;must&nbsp;follow&nbsp;any&nbsp;such&nbsp;action&nbsp;without&nbsp;any&nbsp;delay.&nbsp;
                        <span class="diff_chg">12.2</span>
                        &nbsp;Following&nbsp;notice&nbsp;of&nbsp;t
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_576">
                        576
                      </td>
                      <td nowrap="nowrap">
                        ermination&nbsp;of&nbsp;this&nbsp;Agreement&nbsp;or&nbsp;in&nbsp;the&nbsp;event&nbsp;that&nbsp;Landlord&nbsp;intends&nbsp;to&nbsp;sell&nbsp;the&nbsp;Building,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_576">
                        576
                      </td>
                      <td nowrap="nowrap">
                        ermination&nbsp;of&nbsp;this&nbsp;Agreement&nbsp;or&nbsp;in&nbsp;the&nbsp;event&nbsp;that&nbsp;Landlord&nbsp;intends&nbsp;to&nbsp;sell&nbsp;the&nbsp;Building,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_577">
                        577
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;or&nbsp;its&nbsp;representative&nbsp;together&nbsp;with&nbsp;any&nbsp;potential&nbsp;Tenant&nbsp;or&nbsp;purchaser,&nbsp;shall&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_577">
                        577
                      </td>
                      <td nowrap="nowrap">
                        Landlord&nbsp;or&nbsp;its&nbsp;representative&nbsp;together&nbsp;with&nbsp;any&nbsp;potential&nbsp;Tenant&nbsp;or&nbsp;purchaser,&nbsp;shall&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_578">
                        578
                      </td>
                      <td nowrap="nowrap">
                        have&nbsp;the&nbsp;access&nbsp;to&nbsp;the&nbsp;Premises&nbsp;during&nbsp;the&nbsp;normal&nbsp;business&nbsp;hours&nbsp;of&nbsp;Tenant&nbsp;upon&nbsp;a&nbsp;prior&nbsp;2&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_578">
                        578
                      </td>
                      <td nowrap="nowrap">
                        have&nbsp;the&nbsp;access&nbsp;to&nbsp;the&nbsp;Premises&nbsp;during&nbsp;the&nbsp;normal&nbsp;business&nbsp;hours&nbsp;of&nbsp;Tenant&nbsp;upon&nbsp;a&nbsp;prior&nbsp;2&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__81">n</a>
                      </td>
                      <td class="diff_header" id="from0_579">
                        579
                      </td>
                      <td nowrap="nowrap">
                        (two)&nbsp;business&nbsp;days&nbsp;notice.&nbsp;
                        <span class="diff_chg">____</span>
                        &nbsp;Landlord&nbsp;shall&nbsp;not&nbsp;be&nbsp;liable&nbsp;for&nbsp;the&nbsp;interruptions&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next">
                        <a href="#difflib_chg_to0__81">n</a>
                      </td>
                      <td class="diff_header" id="to0_579">
                        579
                      </td>
                      <td nowrap="nowrap">
                        (two)&nbsp;business&nbsp;days&nbsp;notice.&nbsp;
                        <span class="diff_chg">12.3</span>
                        &nbsp;Landlord&nbsp;shall&nbsp;not&nbsp;be&nbsp;liable&nbsp;for&nbsp;the&nbsp;interruptions&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_580">
                        580
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;installations&nbsp;caused&nbsp;by&nbsp;force&nbsp;majeure&nbsp;or&nbsp;public&nbsp;utility&nbsp;suppliers&nbsp;
                        <span class="diff_sub">(i.e.&nbsp;</span>
                        ____&nbsp;of&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_580">
                        580
                      </td>
                      <td nowrap="nowrap">
                        the&nbsp;installations&nbsp;caused&nbsp;by&nbsp;force&nbsp;majeure&nbsp;or&nbsp;public&nbsp;utility&nbsp;suppliers&nbsp;____
                        <span class="diff_add">_&nbsp;(ie.</span>&nbsp;of&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_581">
                        581
                      </td>
                      <td nowrap="nowrap">
                        heating,&nbsp;water,&nbsp;electricity,&nbsp;telephone).&nbsp;Landlord&nbsp;shall&nbsp;undertake&nbsp;immediately&nbsp;possible&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_581">
                        581
                      </td>
                      <td nowrap="nowrap">
                        heating,&nbsp;water,&nbsp;electricity,&nbsp;telephone).&nbsp;Landlord&nbsp;shall&nbsp;undertake&nbsp;immediately&nbsp;possible&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_582">
                        582
                      </td>
                      <td nowrap="nowrap">
                        efforts&nbsp;to&nbsp;restore&nbsp;as&nbsp;soon&nbsp;as&nbsp;possible&nbsp;normal&nbsp;operation&nbsp;of&nbsp;these&nbsp;installations.&nbsp;If&nbsp;the&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_582">
                        582
                      </td>
                      <td nowrap="nowrap">
                        efforts&nbsp;to&nbsp;restore&nbsp;as&nbsp;soon&nbsp;as&nbsp;possible&nbsp;normal&nbsp;operation&nbsp;of&nbsp;these&nbsp;installations.&nbsp;If&nbsp;the&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_583">
                        583
                      </td>
                      <td nowrap="nowrap">
                        interruptions&nbsp;of&nbsp;certain&nbsp;installation&nbsp;do&nbsp;not&nbsp;qualify&nbsp;as&nbsp;customary,&nbsp;minor&nbsp;interruptions,&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_583">
                        583
                      </td>
                      <td nowrap="nowrap">
                        interruptions&nbsp;of&nbsp;certain&nbsp;installation&nbsp;do&nbsp;not&nbsp;qualify&nbsp;as&nbsp;customary,&nbsp;minor&nbsp;interruptions,&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="from0_584">
                        584
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;the&nbsp;scope&nbsp;of&nbsp;maintenance,&nbsp;and&nbsp;such&nbsp;situation&nbsp;makes&nbsp;it&nbsp;unreasonably&nbsp;difficult&nbsp;for&nbsp;
                      </td>
                      <td class="diff_next"></td>
                      <td class="diff_header" id="to0_584">
                        584
                      </td>
                      <td nowrap="nowrap">
                        within&nbsp;the&nbsp;scope&nbsp;of&nbsp;maintenance,&nbsp;and&nbsp;such&nbsp;situation&nbsp;makes&nbsp;it&nbsp;unreasonably&nbsp;difficult&nbsp;for&nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
