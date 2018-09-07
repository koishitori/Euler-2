var a = 1;
var b = 2;
var ans = 0;
var num = 4000000;
while( b < num ){
  if( b % 2 == 0)
    ans += b;
  c = a;
  a = b;
  b += c;
}
ans;
