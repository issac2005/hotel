<template>
    <div>
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
@import '@/assets/common.scss';
.bottomnav{
    font-size: 14px;
    color: $white;
    height: 70px;
    background-color: $fontLightGrey;

    p {
        text-align: center;
        padding-top: 30px;
        span{margin: 0 10px;}
    }
}
.copyright{
    text-align: center;
    padding-top:13px;
    padding-bottom: 21px;
    font-size:12px;
    color: $white;
    background: #000;
}
</style>
