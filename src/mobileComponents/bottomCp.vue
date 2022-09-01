<template>
    <div class="bottom-wrap">
        <div class="bottomnav">
            <p>
                <span>FAQ</span>                             
                <span>Terms of use</span>
                <span>FPrivacy policy</span>
                <span>Contact us</span>
            </p>
        </div>
        <div class="copyright">
            Copyright CloudTravel 2021.
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/mobileCommon.scss';
.bottom-wrap {
    width: 100%;
    position: absolute;
    bottom: 0;
    left:0;
}
.bottomnav{
    font-size: $fontsize12;
    color: $white;
    height: $size50;
    background-color: $fontLightGrey;

    p {
        text-align: center;
        padding-top: 0.869rem;
        span{margin: 0 $fontsize10;}
    }
}
.copyright{
    height: $size30;
    line-height: $size30;
    text-align: center;
    font-size: $fontsize10;
    color: $white;
    background: #000;
}
</style>
