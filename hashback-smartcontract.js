/*
 * The Book of Blockchain
 *
 * Contribution Smart Contract (JS version)
 * Property of Bitchurch
*/

class Contribution {
  constructor({
    value, // value of contribution in ETH
    currentblock, // current decoding block
    currentstring, // number of decoded strings in current block
    wallet    // contributor's wallet number
  }) {
    /* Constants:
     *   minimum contribution = 0.2 ETH
     *   soft cap = 0
     *   hard cap = 3333 ETH
     *   number of strings in each block = 5
    */
    const minimum = 0.2;   
    const soft = 0;
    const hard = 3333; 
    const strings = 5;
		
    /* Input values */
    this.value = value;
    this.currentblock = currentblock;
    this.currentstring = currentstring;
    this.wallet = wallet;
    
    /* Check the value of contribution. If less than minimum then return money and exit  */	
    if ( this.value < minimum ) {
      this.hashback( this.wallet );
      return;
    }

    /* Number of decoded strings = contribution / minimum. Update current strings number */
    var decoded = this.value / minimum;
    this.currentstring = this.currentstring + decoded;

    /* Check if there is enough strings to decrypt block. Exit if false */
    if ( this.currentstring >= 5 ) {
      this.decrypt( this.currentblock ); // decrypt block
      this.donateNull( this.value );  // destroy money
      this.currentstring = this.currentstring - 5; // update current string number
      return;
    }
    return;
  }
  hashback( wallet ) {
    /* return money with free bless */
  }
  decrypt( block ) {
    /* decrypt block */
    this.currentblock++;
  }
  donateNull( value ) {
    /* destroy money */
  }
}