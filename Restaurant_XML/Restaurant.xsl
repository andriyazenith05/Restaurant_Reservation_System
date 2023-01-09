<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <head>
    <style>
      table,h2{
        margin:10px;
      }
      p{
        padding:5px;
      }
      table{
        border-collapse: collapse;
      }
      th, td {
        padding: 5px;
        text-align: left;
      }
    </style>
  </head>
  <body>
  <h2>RESTAURANT DETAILS</h2>
  <p><b><i>Restaurant details are sorted by name and capacity greater than 50 is highlighted:</i></b></p>
  <table border="1">
    <tr bgcolor="#80c7ec">
      <th>Name</th>
      <th>Mobile No</th>
      <th>Address</th>
      <th>Capacity</th>
      <th>Status</th>
      <th>Timing</th>
    </tr>
    <xsl:for-each select="restaurant/details">
    <xsl:sort select="name"/>
      <xsl:choose>
        <xsl:when test="capacity &gt; 50">
            <tr>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="mobileno"/></td>
              <td><xsl:value-of select="address"/></td>
              <td bgcolor="#ff00ff"><xsl:value-of select="capacity"/></td>
              <td><xsl:value-of select="status"/></td>
              <td><xsl:value-of select="timings"/></td>
            </tr>
        </xsl:when>
        <xsl:otherwise>
          <tr>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="mobileno"/></td>
              <td><xsl:value-of select="address"/></td>
              <td><xsl:value-of select="capacity"/></td>
              <td><xsl:value-of select="status"/></td>
              <td><xsl:value-of select="timings"/></td>
          </tr>
        </xsl:otherwise>
      </xsl:choose>
      </xsl:for-each>
  </table>

  <p><b><i>Restaurant details of capacity greater than 40 is displayed:</i></b></p>
  <table border="1">
    <tr bgcolor="#ecb380">
      <th>Name</th>
      <th>Mobile No</th>
      <th>Address</th>
      <th>Capacity</th>
      <th>Status</th>
      <th>Timing</th>
    </tr>
    <xsl:for-each select="restaurant/details">
      <xsl:if test="status = 'Vacant'">
          <tr>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="mobileno"/></td>
            <td><xsl:value-of select="address"/></td>
            <td><xsl:value-of select="capacity"/></td>
            <td><xsl:value-of select="status"/></td>
            <td><xsl:value-of select="timings"/></td>
          </tr>
      </xsl:if>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet> 