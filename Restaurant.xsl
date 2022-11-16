<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
  <h2>Restaurant Details</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Name</th>
      <th>Mobile No</th>
	  <th>Address</th>
	  <th>Capacity</th>
	  <th>Status</th>
	  <th>Timing</th>
    </tr>
	<xsl:for-each select="restaurant/details">
        <tr>
          <td><xsl:value-of select="name"/></td>
          <td><xsl:value-of select="mobileno"/></td>
		  <td><xsl:value-of select="address"/></td>
		  <td><xsl:value-of select="capacity"/></td>
		  <td><xsl:value-of select="status"/></td>
		  <td><xsl:value-of select="timings"/></td>
        </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet> 